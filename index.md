---
layout: default
---

<div class="home-grid">
  <div class="grid">
    {%- for item in site.data.home_items -%}
    <div class="grid-item">
      <img src="{{ item.image }}" alt="{{ item.name }}">
      <h3>{{ item.name }}</h3>
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

    document.querySelectorAll('.grid-item').forEach(function(item) {
      item.addEventListener('click', function() {
        modalTitle.textContent = item.querySelector('h3').textContent;
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
