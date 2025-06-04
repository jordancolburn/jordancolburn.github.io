import os
from datetime import datetime

SITE_DIR = 'site'
POSTS_DIR = '_posts'
TEMPLATES_DIR = 'templates_static'


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


def parse_front_matter(text):
    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            fm_text = parts[1]
            content = parts[2]
            fm = {}
            for line in fm_text.splitlines():
                if ':' in line:
                    key, value = line.split(':', 1)
                    fm[key.strip()] = value.strip()
            return fm, content.lstrip('\n')
    return {}, text


def render_template(content, title=''):
    template = read_file(os.path.join(TEMPLATES_DIR, 'base.html'))
    page = template.replace('{{ title }}', title)
    page = page.replace('{{ year }}', str(datetime.now().year))
    page = page.replace('{{ content }}', content)
    return page


def build_posts():
    posts = []
    for fname in sorted(os.listdir(POSTS_DIR)):
        if not fname.endswith(('.md', '.markdown')):
            continue
        raw = read_file(os.path.join(POSTS_DIR, fname))
        fm, body = parse_front_matter(raw)
        if fm.get('published', 'true') == 'false':
            continue
        title = fm.get('title', fname)
        date = fm.get('date', '')
        slug = os.path.splitext(fname)[0]
        out_path = os.path.join(SITE_DIR, 'posts', slug + '.html')
        html_body = f"<h1>{title}</h1>\n" + body
        html = render_template(html_body, title)
        write_file(out_path, html)
        posts.append({'title': title, 'date': date, 'url': 'posts/' + slug + '.html'})
    return posts


def build_blog_index(posts):
    items = []
    for post in sorted(posts, key=lambda p: p['date'], reverse=True):
        items.append(f"<li><a href='/{post['url']}'>{post['title']}</a> {post['date']}</li>")
    body = '<h1>Blog</h1>\n<ul>' + '\n'.join(items) + '</ul>'
    html = render_template(body, 'Blog')
    write_file(os.path.join(SITE_DIR, 'blog.html'), html)


def build_pages(posts):
    pages = ['index.md', 'templates.md', 'premium.md', 'js-game.md']
    for page in pages:
        if not os.path.exists(page):
            continue
        raw = read_file(page)
        fm, body = parse_front_matter(raw)
        title = fm.get('title', '')
        slug = os.path.splitext(page)[0] + '.html'
        html = render_template(body, title)
        write_file(os.path.join(SITE_DIR, slug), html)


def main():
    posts = build_posts()
    build_blog_index(posts)
    build_pages(posts)


if __name__ == '__main__':
    main()
