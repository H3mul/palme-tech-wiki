document.addEventListener('DOMContentLoaded', () => {
    const pv_container = document.getElementById('pageviews-container');
    const pv = document.getElementById('pageviews');

    if (pv !== null) {
      const uri = location.pathname.replace(/\/$/, '');
      const url = `https://{{ site.analytics.goatcounter.id }}.goatcounter.com/counter/${encodeURIComponent(uri)}.json`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const count = data.count.replace(/\s/g, '');
          pv.innerText = new Intl.NumberFormat().format(count);
          pv_container.classList.remove('d-none');
        })
    }
});