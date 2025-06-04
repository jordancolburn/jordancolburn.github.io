This repository contains the sources for jordancolburn.com.

# Building locally

A small Python script is provided so the site can be built without Ruby or third party dependencies. Run:

```bash
python3 scripts/build.py
```

The generated site will appear in the `site/` directory. Simply open `site/index.html` in a browser or serve the folder with any static file server.

## Deployment

Netlify builds the site using `python3 scripts/build.py` as configured in `netlify.toml`. The generated `site/` directory is then served.
