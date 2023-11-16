var loader = document.getElementById("preloader");
  window.addEventListener("load", function(){
loader.style.display = "none";
  })
  var page = 1
  const nextB = document.getElementById("nextB");
  const previousB = document.getElementById("previousB");
  previousB.style.display = "none";
  const t1 = document.getElementById("t11");
  const t2 = document.getElementById("t22");
  const t3 = document.getElementById("t3");
  const t4 = document.getElementById("t4");
  const t5 = document.getElementById("t5");
  const t6 = document.getElementById("t6");
  const t7 = document.getElementById("t7");
  const t8 = document.getElementById("t8");
  const t9 = document.getElementById("t9");
  const t10 = document.getElementById("t10");
  const t11 = document.getElementById("t111");
  const t12 = document.getElementById("t12");
  const rn = document.getElementById("rulesName");

  function next(){
  if (page == 1){
  page = 2;
  previousB.style.display = "flex";
  t1.innerHTML = "2. ALLOWED AND NOT ALLOWED";
  t2.innerHTML = "2.1 Drones & other fly apparatures forbidden for safety.";
  t3.innerHTML = "2.2 Laptops, tablets,... (excl. phone) forbidden in order to avoid vandalism.";
  t4.innerHTML = "2.3 RC-cars, speakers, flashlights, laser,... not allowed.";
  t5.innerHTML = "2.4 Food & non-alcoholic drinks allowed, no alcohol or beer expected."
  t6.innerHTML = "2.5 Weapons, sharp items & other illegal items strongly forbidden.";
  t7.innerHTML = "2.6 Non-alcoholic drinks (<0.5l) & in metal cans are allowed.";
  t8.style.display = "flex";
  t8.innerHTML = "2.7 Smoking & vaping not allowed for safety.";
  t9.style.display = "flex";
  t9.innerHTML = "2.8 Ask permission on recording and photographing performances, if you";
  t10.style.display = "flex";
  t10.innerHTML = "use professionsal & expensive equipment."
  t11.style.display = "none";
  t12.style.display = "none";
  } else if (page == 2){
    page = 3;
  t1.innerHTML = "3. SECURITY & PRIVACY";
  t2.innerHTML = "3.1 Security is responsible for our & stage safety and not for your safety.";
  t3.innerHTML = "3.2 Do not enter our terrain on your transport (electric steps, bicycles,...).";
  t4.innerHTML = "3.3 You automaticly accept to be posted on social media posts.";
  t5.innerHTML = "3.4 Amount of visitors has a limit of max 25 people, under 16 of age."
  t6.innerHTML = "3.5 Outline any restrictions on bag sizes and the types of bags allowed.";
  t7.innerHTML = "3.6 Non-alcoholic drinks (<0.5l) & in metal cans are allowed.";
  t8.style.display = "flex";
  t8.innerHTML = "3.7 Decepting/copying forbidden."
  t9.style.display = "flex";
  t9.innerHTML = "3.8 Follow the signs to park your transport (bicycles, steps,...).";
  t10.style.display = "flex";
  t10.innerHTML = "3.9 Do not follow our staff while transporting."
  t11.style.display = "none";
  t12.style.display = "none";
  } else if (page == 3){
  page = 4
  t1.innerHTML = "4. SPECIAL ROLES";
  t2.innerHTML = "4.1 Special roles has access to stay near/behind the stage.";
  t3.innerHTML = "4.2 Special roles stays away from crowds for safety.";
  t4.innerHTML = "4.3 Lining up on stage gives permission to control the sound.";
  t5.style.display = "none";
  t6.style.display = "none";
  t7.style.display = "none";
  t8.style.display = "none";
  t9.style.display = "none";
  t10.style.display = "none";
  t11.style.display = "none";
  t12.style.display = "none";
  } else if (page == 4){
  page = 5;
  nextB.style.display = "none";
  t1.innerHTML = "5. RULE VIOLATION ACTION";
  t2.innerHTML = "5.1 If you broke the rule and let it know to us, we will warn you.";
  t3.innerHTML = "5.2 If you broke the rule without letting us know about it, you will";
  t4.innerHTML = "be warned only 1 time.";
  t5.style.display = "flex";
  t5.innerHTML = "5.3 If you broke multiple or important rules or had warned already, we";
  t6.style.display = "flex";
  t6.innerHTML = "will take you off our festival terrain.";
  t7.style.display = "none";
  t8.style.display = "none";
  t9.style.display = "none";
  t10.style.display = "none";
  t11.style.display = "none";
  t12.style.display = "none";
  }
  }

  function previous(){
  if (page == 2){
  page = 1;
  previousB.style.display = "none";
  t8.style.display = "flex";
  t9.style.display = "flex";
  t10.style.display = "flex";
  t11.style.display = "flex";
  t12.style.display = "flex";
  t1.innerHTML = "1. COMMUNICATION & RESPECT";
  t2.innerHTML = "1.1 Be respectfull when talking with staff or someone else.";
  t3.innerHTML = "1.2 No aggresion expected when communicating.";
  t4.innerHTML = "1.3 Fight, aggresivity is strongly forbidden.";
  t5.innerHTML = "1.4 Use default English & Dutch when talking to our staff.";
  t6.innerHTML = "1.5 Do not disturb our staff when they are busy.";
  t7.innerHTML = "1.6 Vandalism, same with (laptops, tablets,...) not allowed.";
  t8.innerHTML = "1.7 Food & non-alcoholic drinks allowed, alcohol forbidden.";
  t9.innerHTML = "1.8 Pick the correct way to enter the festival zone.";
  t10.innerHTML = "1.9 Do not touch or hit the stage, keep distance >1.5m.";
  t11.innerHTML = "1.10 You are not being expected near or behind the stage.";
  t12.innerHTML = "1.11 Drones & other fly apparatures forbidden for safety."
  } else if (page == 3){
  page = 2
  t1.innerHTML = "2. ALLOWED AND NOT ALLOWED";
  t2.innerHTML = "2.1 Drones & other fly apparatures forbidden for safety.";
  t3.innerHTML = "2.2 Laptops, tablets,... (excl. phone) forbidden in order to avoid vandalism.";
  t4.innerHTML = "2.3 RC-cars, speakers, flashlights not allowed.";
  t5.innerHTML = "2.4 Food & non-alcoholic drinks allowed, no alcohol or beer expected."
  t6.innerHTML = "2.5 Weapons, sharp items & other illegal items strongly forbidden.";
  t7.innerHTML = "2.6 Non-alcoholic drinks (<0.5l) & in metal cans are allowed.";
  t8.style.display = "flex";
  t8.innerHTML = "2.7 Smoking & vaping not allowed for safety.";
  t9.style.display = "flex";
  t9.innerHTML = "2.8 Ask permission on recording and photographing performances, if you";
  t10.style.display = "flex";
  t10.innerHTML = "use professionsal & expensive equipment."
  t11.style.display = "none";
  t12.style.display = "none";
  } else if (page == 4){
  page = 3;
  t1.innerHTML = "3. SECURITY & PRIVACY";
  t2.innerHTML = "3.1 Security is responsible for our & stage safety and not for your safety.";
  t3.innerHTML = "3.2 Do not enter our terrain on your transport (electric steps, bicycles,...).";
  t4.innerHTML = "3.3 You automaticly accept to be posted on social media posts.";
  t5.innerHTML = "3.4 Amount of visitors has a limit of max 25 people, under 16 of age."
  t6.innerHTML = "3.5 Outline any restrictions on bag sizes and the types of bags allowed.";
  t7.innerHTML = "3.6 Non-alcoholic drinks (<0.5l) & in metal cans are allowed.";
  t5.style.display = "flex";
  t6.style.display = "flex";
  t7.style.display = "flex";
  t8.style.display = "flex";
  t8.innerHTML = "3.7 Decepting/copying forbidden."
  t9.style.display = "flex";
  t9.innerHTML = "3.8 Follow the signs to park your transport (bicycles, steps,...).";
  t10.style.display = "flex";
  t10.innerHTML = "3.9 Do not follow our staff while transporting."
  t11.style.display = "none";
  t12.style.display = "none";
  } else if (page == 5){
  page = 4;
  nextB.style.display = "flex";
  t1.innerHTML = "4. SPECIAL ROLES";
  t2.innerHTML = "4.1 Special roles has access to stay near/behind the stage.";
  t3.innerHTML = "4.2 Special roles stays away from crowds for safety.";
  t4.innerHTML = "4.3 Lining up on stage gives permission to control the sound.";
  t5.style.display = "none";
  t6.style.display = "none";
  t7.style.display = "none";
  t8.style.display = "none";
  t9.style.display = "none";
  t10.style.display = "none";
  t11.style.display = "none";
  t12.style.display = "none";
  }
  }
