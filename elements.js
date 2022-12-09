var prgsb_arr = {};
var dl = 0;
fetch('./blocks.json')
.then((res) => res.json())
.then((dat) => {
  dl = dat['end'] - dat['start'];
  console.log(dat)
  prgsb_arr = {};
  for(let i = 0; i < Object.keys(dat['blocks']).length; i++){
    console.log(i);
    var newDiv = document.createElement('div');
    var did = `block${i}`;
    newDiv.id = `block${i}`;
    newDiv.style.width = "240px";
    newDiv.style.height = "50px";
    newDiv.style.boxShadow = "0px 0px 30px #b8b8b8";
    newDiv.className = 'midbox';
    newDiv.style.backgroundColor = '#fcfcfc';
    newDiv.style.position = 'absolute';
    newDiv.style.top = `${20+(i*55)}px`;
    newDiv.style.left = `10px`;
    
newDiv.setAttribute('onmouseover',`expand('${did}', 'bpb${i}', 480);`);
    newDiv.setAttribute('onmouseout', `retract('${did}', 'bpb${i}', 240);`);
    if(i == 0){
      newDiv.className = 'upbox';
    }
    if(i == Object.keys(dat['blocks']).length-1){
      newDiv.className = 'lowbox';
    }

    var pbb = document.createElement('div');
    pbb.id = `pbb${i}`;
    pbb.className = 'pbb';
    pbb.style.width = '180px';
    newDiv.appendChild(pbb);
    
    var pb = document.createElement('div');
    pb.style.width = '0px';
    pb.className = 'pb';
    pb.id = `bpb${i}`;
    newDiv.appendChild(pb);

    var boxt = document.createElement('div');
    boxt.innerHTML = `A_BLOCK`;
    boxt.id = `boxt${i}`;
    boxt.className = 'bt';
    newDiv.appendChild(boxt);
 
    document.body.appendChild(newDiv);
    prgsb_arr[`bpb${i}`] = {"width": 220};
    console.log(prgsb_arr);

    var hld = document.getElementById('block-holder');
    var brkt = document.createElement('div');
    brkt.className = 'bracket';
    brkt.style.backgroundColor = '#ff2b60';
    brkt.id = `brkt${i}`;

    hld.appendChild(brkt)
    
  }
  for(let i = 0; i < Object.keys(dat['sub-blocks']).length; i++){
    var side_box_hex = dat['sub-blocks'][`sub-block${i}`]['hex'];
    var sbid = document.createElement('div');
    sbid.style.width = '320px';
    sbid.style.top = `${350+(i*45)}px`;
    sbid.style.left = '10px';
    sbid.className = 'sbbox';
    sbid.id = `sub-block${i}`;                  sbid.setAttribute('onmouseover',`expand('sub-block${i}', 'sub_pb${i}', 520)`);
    sbid.setAttribute('onmouseout', `retract('sub-block${i}', 'sub_pb${i}', 320)`);
    var side_box = document.createElement('div');
    side_box.style.width = '5px';
    side_box.style.backgroundColor = side_box_hex;
    side_box.className = 'side_box';

    var sbpbbg = document.createElement('div');
    sbpbbg.className = 'sb-pb-bg';
    sbpbbg.id = `sub-bpb${i}`;
    sbpbbg.style.width = '300px';
    var sub_pb = document.createElement('div');
    sub_pb.className = 'pb';
    sub_pb.style.width = '0px';
    sub_pb.style.top = '28px';
    sub_pb.id = `sub-apb${i}`;

    var sub_text = document.createElement('div');
    sub_text.className = 'bt';
    sub_text.innerHTML = 'A_SUB-BLOCK';
    sub_text.id = `sbt${i}`;
    

    sbid.appendChild(sub_text);
    sbid.appendChild(side_box);
    sbid.appendChild(sbpbbg);
    sbid.appendChild(sub_pb);
    document.body.appendChild(sbid);
    prgsb_arr[`sub_pb${i}`] = {"width": 300};
    var hld = document.getElementById('block-holder');
    var brkt = document.createElement('div');
    brkt.className = 'bracket';
    brkt.style.backgroundColor = '#6eafff';
    brkt.id = `sbrkt${i}`;

    hld.appendChild(brkt)
  }
})