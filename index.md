---
layout: default
---

<div class="home-grid">
  <div class="grid">
    {%- for item in site.data.home_items -%}
    <div class="grid-item {{ item.orientation }}">
      <img src="{{ item.image }}" alt="{{ item.name }}">
      <div class="item-label">{{ item.name }}</div>
      <div class="item-content" hidden>
        {{ item.content }}
      </div>
    </div>
    {%- endfor -%}
  </div>

  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 id="modal-title"></h2>
      <div id="modal-body"></div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = modal.querySelector('.close');
    const modalContent = modal.querySelector('.modal-content');

    document.querySelectorAll('.grid-item').forEach(function(item) {
      item.addEventListener('click', function() {
        const rect = item.getBoundingClientRect();
        const originX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
        const originY = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
        modalContent.style.setProperty('--origin-x', originX + 'vw');
        modalContent.style.setProperty('--origin-y', originY + 'vh');

        modalTitle.textContent = item.querySelector('.item-label').textContent;
        modalBody.innerHTML = item.querySelector('.item-content').innerHTML;
        modal.classList.add('open');
      });
    });

    closeBtn.addEventListener('click', function() {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
</script>
