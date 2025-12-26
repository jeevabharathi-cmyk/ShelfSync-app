(function(){
  function loadScript(src, cb){
    var s=document.createElement('script'); s.src=src; s.async=true;
    s.onload=cb; document.head.appendChild(s);
  }

  function initCharts(){
    try{
      const primary = '#4F46E5';
      const accent = '#F59E0B';

      const makeLine = (ctx, labels, data, color)=> new Chart(ctx,{type:'line',data:{labels, datasets:[{label:'', data, borderColor:color, backgroundColor:color+'22', fill:true, tension:0.3}]}, options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}}});
      const makeBar = (ctx, labels, data, color)=> new Chart(ctx,{type:'bar',data:{labels, datasets:[{label:'', data, backgroundColor:color}]}, options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}}});
      const makePie = (ctx, labels, data, colors)=> new Chart(ctx,{type:'pie',data:{labels, datasets:[{data, backgroundColor:colors}]}, options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}}}});

      const r = document.getElementById('adminRevenueChart');
      if(r) makeLine(r.getContext('2d'), ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], [6,9,7,12,14,10,18], primary);

      const u = document.getElementById('adminUsersChart');
      if(u) makeBar(u.getContext('2d'), ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], [2,5,3,6,4,7,8], accent);

      const s = document.getElementById('sellerSalesChart');
      if(s) makeLine(s.getContext('2d'), ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], [3,6,5,9,11,7,13], primary);

      const t = document.getElementById('sellerTopChart');
      if(t) makeBar(t.getContext('2d'), ['Gatsby','1984','Sapiens','Atomic Habits'], [12,9,7,5], accent);

      const p = document.getElementById('customerPurchasesChart');
      if(p) makeLine(p.getContext('2d'), ['Jul','Aug','Sep','Oct','Nov','Dec'], [1,2,0,2,3,4], primary);

      const c = document.getElementById('customerCategoriesChart');
      if(c) makePie(c.getContext('2d'), ['Fiction','Self-help','Business','Sci-fi'], [35,25,20,20], ['#4F46E5','#F59E0B','#10B981','#EF4444']);
    }catch(e){console.warn('initCharts error', e);}  
  }

  // Load Chart.js then initialize
  if(window.Chart) initCharts(); else loadScript('https://cdn.jsdelivr.net/npm/chart.js', initCharts);
})();
