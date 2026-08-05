const form=document.getElementById('scanForm');
if(form){
const $=id=>document.getElementById(id), loading=$('loading'), result=$('result'), errorCard=$('errorCard');
form.addEventListener('submit',async e=>{e.preventDefault();const url=$('urlInput').value.trim();if(!url)return;result.classList.add('hidden');errorCard.classList.add('hidden');loading.classList.remove('hidden');$('scanButton').disabled=true;
try{const res=await fetch('/api/scan',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url})});const data=await res.json();if(!res.ok||!data.ok)throw new Error(data.error||'Scan failed.');render(data);}
catch(err){$('errorText').textContent=err.message;errorCard.classList.remove('hidden');}
finally{loading.classList.add('hidden');$('scanButton').disabled=false;}
});
function render(d){const risk=d.risk;const card=$('resultCard');card.className=`result-card ${risk}`;$('riskLabel').textContent=risk==='safe'?'Low risk':risk==='suspicious'?'Needs caution':'High risk';$('prediction').textContent=d.prediction==='Legitimate'?'Likely legitimate website':'Possible phishing website';$('resultUrl').textContent=d.details.normalized_url;$('riskScore').textContent=`${Math.round(d.phishing_probability)}%`;$('gauge').style.setProperty('--score',`${d.phishing_probability*3.6}deg`);$('statusIcon').innerHTML=risk==='safe'?'✓':risk==='suspicious'?'!':'×';
$('reasons').innerHTML=d.reasons.map(r=>`<div class="reason ${r.type}"><span>${r.type==='positive'?'✓':r.type==='negative'?'!':'•'}</span><p>${escapeHtml(r.text)}</p></div>`).join('');
const x=d.details;$('breakdown').innerHTML=[['HTTPS',x.uses_https?'Yes':'No'],['URL length',x.url_length],['Subdomains',x.subdomains],['Dots / hyphens',`${x.dots} / ${x.hyphens}`],['IP hostname',x.ip_address?'Yes':'No'],['Suspicious terms',x.phishing_terms],['Page fetched',x.page.fetched?'Yes':'No'],['Domain',x.registered_domain||'Unknown']].map(([a,b])=>`<div><dt>${a}</dt><dd>${escapeHtml(String(b))}</dd></div>`).join('');
const warn=$('warnings');if(x.warnings.length){warn.innerHTML='<strong>Analysis notes</strong>'+x.warnings.map(w=>`<p>${escapeHtml(w)}</p>`).join('');warn.classList.remove('hidden')}else warn.classList.add('hidden');$('disclaimer').textContent=d.disclaimer;result.classList.remove('hidden');result.scrollIntoView({behavior:'smooth',block:'start'});}
function escapeHtml(v){const d=document.createElement('div');d.textContent=v;return d.innerHTML;}
}
