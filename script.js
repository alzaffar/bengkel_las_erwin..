function showProject(project){

let html="";

if(project=="kanopi"){

html=`

<img src="kanopi2.jpeg">

<h2>Kanopi Minimalis</h2>

<p>
Kanopi carport dengan rangka hollow galvanis yang dirancang
kuat, modern dan tahan terhadap cuaca.
</p>

<div class="info-grid">

<div class="info-card">
<h5>Lokasi</h5>
<p>Binjai</p>
</div>

<div class="info-card">
<h5>Tahun</h5>
<p>2025</p>
</div>

<div class="info-card">
<h5>Dimensi</h5>
<p>4,8 x 3 Meter</p>
</div>

<div class="info-card">
<h5>Durasi</h5>
<p>10 Hari</p>
</div>

</div>

<h4>Material</h4>

<div class="material">

<span>Hollow Galvanis</span>

<span>Alderon</span>

<span>Cat Hitam Doff</span>

<span>Besi Ornament</span>

</div>

<h4 class="mt-5">Proses Pengerjaan</h4>

<ol class="step">

<li>Survey lokasi</li>

<li>Pengukuran</li>

<li>Fabrikasi</li>

<li>Pemasangan</li>

<li>Finishing</li>

</ol>

`;

}

document.getElementById("projectContent").innerHTML=html;

document.getElementById("detailProject").classList.remove("d-none");

document.getElementById("detailProject").scrollIntoView({
behavior:"smooth"
});

}