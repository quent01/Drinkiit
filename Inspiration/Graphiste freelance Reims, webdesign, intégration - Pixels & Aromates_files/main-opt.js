jQuery(function($){
		$(".fancybox").fancybox({
			openEffect : 'none',
			helpers : {
				title : null            
			}        
		});
		/*///INTERNET EXPLORER 6 SUPERSLEIGHT - IMAGE  DE FOND///*/
		$('#hello p,#piment img, #mains img,#logo,#hello img,#process h2,#process span, #apropos img,  #contact img, #gauche, #droite, #sendbutton, .ie6 a.flecheD,.ie6  a.flecheG, .ie7 a.flecheD,.ie7  a.flecheG').supersleight({shim: '../../../wp-content/themes/pixelsetaromates/img/x.gif'});
		
		/*///CHARGEMENT DE LA PAGE///*/
		
		//barre d'adresse
		var root = location.protocol + '//' + location.host //+'/pixels_aromates';
		var addr= window.location;
		var actuel =addr.toString();
		var diese = actuel.indexOf("#");
		var slash = actuel.indexOf("/",diese);
		var btnActif = false;
		var oldURL = window.location.toString();
		
				//////////////VARIABLE/////////////
		var elemCl=""; 
		var newHash = "tout/",
		$mainContent = $("#port"),
        $pageWrap    = $("#cadrePortfolio")/*,
        baseHeight   = 0,
        $el*/;
		var lien ='';
        var chaine='';
		var imgHeight;
		//baseHeight = $pageWrap.innerHeight() - $mainContent.innerHeight();
		
		///????redirection
		/*if(actuel.search(/#/)!=-1){
		var ancre= window.location.hash.replace('#','');
		newHash = ancre;
		
		loadContent();
		}*/
		var domaine;
		var domaineIdd;
		for(i=0;i<$("#domaine li").length; i++){
			domaine = $("#domaine li").eq(i);
			domaineIdd = domaine.attr("id");
			if(actuel.search(domaineIdd) != -1){	
				
				$('#domaine li.active').removeClass('active');
				domaine.addClass('active');
						
						
					}
        		}
		
		//redirection
		if(verifMenu()==false){
			
		}
		else if(actuel.search(/usermessagea/)>=1){//formulaire
			window.location.hash="contact";
		}else if(diese-(root.toString()).length >1 && actuel.search(/captcha/)==-1 && actuel.search(/contact/)==-1){//quelquechose apres le hash
			var elimine = actuel.substring(root.length+1, diese)//on prends ce qu'il y'a apres le hash
			actuel =actuel.replace(elimine,'');
			actuel =actuel.replace('#','');
			/*window.location.href=actuel;*/
			newHash = actuel;
			loadContent();
		}else if(actuel.search(/#/)!=-1 && actuel.search(/captcha/)==-1 && actuel.search(/contact/)==-1){
			
			var ancre= window.location.hash.replace('#','');
			newHash = ancre;
			loadContent();
			//window.location.href=ancre;
		}
		
		//checking #PIMENT #MAINS et #FLECHES
		var piment = $('<div id="piment"><img src="'+root+'/wp-content/themes/pixelsetaromates/img/piment.png" alt="" /></div><div id="mains"><img src="'+root+'/wp-content/themes/pixelsetaromates/img/mains.png" alt="" /></div>');
		verifIllu();
		verifPage();
		
		//fonction pour verifier si #piment est présent
		function verifIllu(){
			if($('#piment').size()<1){
				piment.insertBefore('#cadrePortfolio');
				$('#piment, #mains').supersleight({shim: '../../wp-content/themes/pixelsetaromates/img/x.gif'});
				$('#piment, #mains').hide();
			}
		}
		
		//fonction pour verifier si #fleches est présent
		function verifPage(){
			if($('#fleches').size() <1 && $('#portfolio article').length>0){
				$('<div id="fleches"></div>').appendTo('#portfolio article');
			}
		}
		
		//before & after service
		$('#services dt strong').before('<span><img src="'+root+'/wp-content/themes/pixelsetaromates/img/star-services.png" alt=""></span> ');
		$('#services dt strong').after(' <span><img src="'+root+'/wp-content/themes/pixelsetaromates/img/star-services.png" alt=""></span>');
		
		//over .show
		$('.ie6 .show').hover(function(){
				var windowWidth = $(window).width();
				if(windowWidth > 670){
					$(this).stop().animate({
						marginTop: "-50%",
						queue : false
														   
					  }, 150);
				}
		});
		
		$('.ie6 .show').mouseleave(function(){
				$(this).stop().animate({
				    marginTop: "0",
				    queue : false
				  }, 150);
		});
		
		//ipad and iphone fix
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
			$("#navigation li").find("a").click(function(){
				
			});
		}
		﻿//over .show
		$('.ie6 .bloc a').hover(function(){
					$(this).find("h3").stop().animate({
						marginTop: "0",
						queue : false
					  }, 150);
					
					$(this).find("p").stop().animate({
						top: "80",
						queue : false
					  }, 150);
		});
		
		
		$('.ie6 .bloc a').mouseleave(function(){
					$(this).find("h3").stop().animate({
						marginTop: "150",
						queue : false
					  }, 150);
					
					$(this).find("p").stop().animate({
						top: "155",
						queue : false
					  }, 150);
		});
		/*///PORTFOLIO///*/
		var clicked;
		var back;
		var options = {
			animation: "slide",
			controlNav: true,
			directionNav: true,
			slideshow: true,
			startAt: 0,
			slideshowSpeed: 5000,
			start: function(slider,methods){
						if($('.flex-direction-nav').length==1){
						$('.flex-direction-nav').appendTo($('#fleches'));
						$('.flex-prev').hide().delay(500).show('drop',  { direction: "right" },200);
						$('.flex-next').hide().delay(500).show('drop',  { direction: "left" },200);
						slider.update();
						slider.doMath();
						slider.setup();
						slider.newSlides.width(slider.computedW);
						slider.setProps(slider.computedW, "setTotal");
						$('.ie6 .flex-direction-nav a').supersleight({shim: '../../../wp-content/themes/pixelsetaromates/img/x.gif'});
						$pageWrap.css('height','auto');
						
						}
					}	
		
		}
		$('.flexslider').flexslider(options);
		var testurl;
		testurl = root+"/#"
		var actuelSlash = root+"/";
		if(actuel==actuelSlash || actuel.search(testurl)!=-1){
		$('.details a').on( "click", page);
		$('#domaine li a').on( "click", page);
        $('#domaine li a').on('click', changeCl);
        $('.pagination li a').one( "click", page);
        $('a.thumb').one( "click", page);
		$('.flecheD').one('click', page);
		
		}
		//$('.fl a').live('click', page);
		///ajout de classe pour menu #domaines du portfolio
		function changeCl(event){
			var idDomaine = $(this).parent().attr('id');
				
				$('#domaine li.active').removeClass('active');
				$('#domaine #'+idDomaine).addClass('active');
				event.preventDefault();
				return false;
		}
		///PAGINATION
		function page(event){
			clicked =$(this).parent().parent().attr("id");
			elemCl=($(this).attr("class"));
			if($(this).parents().is("#portfolio")||$(this).parents().is(".details")){
			btnActif = true;
			}else{
			btnActif = false;
			}
			//btnActif = $(this).parents().is("#portfolio");	
			lien =	$(this).attr("href");

			for(var i=0,t=0;i<lien.length;i++){
				if(actuel.charAt(i)==lien.charAt(i)){
					
					t++
				}else{
					break;
				}
			}
			
			chaine = lien.substr(0,root.length+1);
			ajout =lien.substr((root.length)+1);
			
			
			
			if(ajout==""){
				
				window.location.hash ="page/1/";
			} else if(lien!=actuel){
				//alert(($(this).attr("href")).substr(root.length+1));
				window.location.hash =($(this).attr("href")).substr(root.length+1);
			}else {
			
				newHash=lien;
				window.location.hash =ajout;
			}
			return false;
        }
        
        if($(".swf").length>0){
			$(".swf")
			.attr('rel', 'gallery')
			.fancybox({
				type: 'swf',
				autoSize : false,
				 openEffect : 'none',
				helpers : {
					title : null            
				},        
				beforeLoad : function() {                    
				this.width = parseInt(this.href.match(/width=[0-9]+/i)[0].replace('width=',''));  
				this.height = parseInt(this.href.match(/height=[0-9]+/i)[0].replace('height=',''));
				}
				})
			}
		function loadContent(){
			if (newHash.search(/portfolio/)>-1||newHash.search(/domaine/)>-1||newHash.search(/page/)>-1){
			var redir =root+"/"+newHash;
			if(clicked=='pagination-list' ||clicked=='portfolio-filter' ||clicked=='group'){
			back= newHash;
			
			}/*else if($("#gallery").length<1 && back==undefined){
				back=redir;
				//back=root+""+"/page/1/";
							
			}*/
			verifIllu();
			verifPage();
			
			$('.flexslider').css("display","none");	
			
		
			var oldHeight =	$pageWrap.height();
			$("#port").css('height',$("#port").height());
			if (newHash) {
									var backup; 
					backup = $('#portfolio').clone(false);
				$("#folio").css('height',oldHeight).hide('drop',  { direction: "down" },200,function () {
					$pageWrap.css('height',oldHeight);

					
					$mainContent.empty();	
					$mainContent.load(newHash + " #folio", function(response, status, xhr) {
						
						if(status == "success"){
							if($("#gallery").length<1 && back==undefined){
								back=redir;
								//back=root+""+"/page/1/";
											
							}else if($("#gallery").length>=1 && back==undefined || actuel==root){
							back=root+"/"+"page/1/";
							}
							if(back!=undefined){
								$("#gallery").append("<a class='back' href='"+back+"'><div>fermer</div></a>");
								$('.back').one( "click", page);
							}
							$(".fancybox").fancybox({
								openEffect : 'none',
								helpers : {
									title : null            
								}        
							});
							if($(".swf").length>0){
								$(".swf")
								.attr('rel', 'gallery')
								.fancybox({
									openEffect : 'none',
									helpers : {
										title : null            
									},        
									type: 'swf',
									autoSize : false,
									beforeLoad : function() {                    
									this.width = parseInt(this.href.match(/width=[0-9]+/i)[0].replace('width=',''));  
									this.height = parseInt(this.href.match(/height=[0-9]+/i)[0].replace('height=',''));
									}
									})
								}
							
							if(elemCl=="thumb" && $("#piment").is(':visible') && $('a.thumb').length<1 || ($('a.thumb').length<=3 && $('a.thumb').length>=1 && $("#piment").is(':visible'))){
								
								$("#piment").css("z-index",10);
								$("#mains").css("z-index",10);
								$("#piment").stop().hide('drop', { direction: "right" },250);
								$("#mains").stop().hide('drop', { direction: "left" },250);
							}else if(elemCl!="thumb" && $("#piment").is(':hidden') && $('a.thumb').length>3){
								$('#piment, #mains').supersleight({shim: '../../../../wp-content/themes/pixelsetaromates/img/x.gif'});
								$("#piment").delay(550).show('drop', { direction: "right" },250);
								$("#mains").delay(550).show('drop', { direction: "left" },250,function(){
										$("#piment").css("z-index",250);
										$("#mains").css("z-index",250);
								});
							}else if($("#piment").is(':hidden') && $('a.thumb').length>3){
								$('#piment, #mains').supersleight({shim: '../../../../wp-content/themes/pixelsetaromates/img/x.gif'});
								$("#piment").delay(550).show('drop', { direction: "right" },250);
								$("#mains").delay(550).show('drop', { direction: "left" },250,function(){
										$("#piment").css("z-index",250);
										$("#mains").css("z-index",250);
								});
							}else if($("#piment").is(':hidden')){
							$('#piment, #mains').supersleight({shim: '../../../../wp-content/themes/pixelsetaromates/img/x.gif'});
								$("#piment").delay(550).show('drop', { direction: "right" },250);
								$("#mains").delay(550).show('drop', { direction: "left" },250,function(){
										$("#piment").css("z-index",250);
										$("#mains").css("z-index",250);
								});

							}
						$('.ie6 a.flecheD,.ie6 a.flecheG, .ie6 .flex-direction-nav a').supersleight({shim: '../../../wp-content/themes/pixelsetaromates/img/x.gif'});
								var heightC = $mainContent.outerHeight(true);
								$('.pagination li a').one( "click", page);
								$('a.thumb').on( "click", page);
								
								if(elemCl=="thumb"){
									//$('#wrap').hide().remove();
								}
								$("#gallery").css("display","none");
								$("#folio").hide().delay(250).show('drop',  { direction: "down" },100,function () {
								//$mainContent.delay(250).show('drop',  { direction: "down" },100,function () {
										$("#port").css('height',"auto");
									$pageWrap.animate({height:$mainContent.outerHeight()},300);
									if($('.flexslider').length==1 && $('#fleches').length==1){
										$('.flexslider').flexslider(options);
										$('.flexslider').css("display","none");
										$('.slides').css("left","-553px");
										//$('.slides').css("-webkit-transform", translate3d(-553px, 0px, 0px));
										//$('.slides').css("-webkit-transform", "translate3d(-553px, 0px, 0px)");
										$("#gallery").show(10);
										$('.slides').css("opacity","0");
										$('.flexslider').delay(600).show('drop',{ direction: "down" },150,function(){
											var flexWidth =	-($('.flexslider').width());
											if($('.slides li').length>1){	
												$('.slides').css("-webkit-transform", "translate3d("+flexWidth+"px, 0px, 0px)");
												$('.slides').css("-moz-transform", "translate3d("+flexWidth+"px, 0px, 0px)");
												$('.slides').css("-o-transform", "translate3d("+flexWidth+"px, 0px, 0px)");
												$('.slides').css("-ms-transform", "translate3d("+flexWidth+"px, 0px, 0px)");
												$('.slides').animate({opacity: 1.0})
											}else{
											$('.slides').animate({opacity: 1.0})
											}
												$pageWrap.css('height','auto');
										
										});
										
									}
									//$.scrollTo("#portfolio", "slow");
									$('html,body').animate({scrollTop : $("#portfolio").offset().top},{queue:false,duration:800});
								});
								$("#domaine a").removeClass("active");
								
						}else{
							window.location=root;
							/*try
							  {
							  	 $('#portfolio').replaceWith( backup );
							  //Run some code here
							  }
							catch(err)
							  {
							  //Handle errors here
							  }*/
						
						}
					});
				});
			};
			///FLECHES
			if($('.flex-direction-nav').length>=1){
				$('.flex-prev').hide('drop',  { direction: "right" },200);
				$('.flex-next').hide('drop',  { direction: "left" },200);
			}
			
			if($('.flecheG').size() >= 1){
				$(".flecheG").hide('drop',{ direction:"right"},600);
			}
			if($('.flecheD').size() >= 1){
				$(".flecheD").hide('drop',  { direction: "left" },600);
			}
			$("#fleches").load(newHash+" #wrap", function(response, status, xhr) {
				
				if($('.flecheG').size() >= 1){
					$(".flecheG").hide();
					$('.flecheG').one('click', page);
					$(".flecheG").delay(250).show('drop',  { direction: "right" },250);
				}
				if($('.flecheD').size() >= 1){
					$(".flecheD").hide();
					$('.flecheD').one('click', page);
					$(".flecheD").delay(250).show('drop',  { direction: "left" },250);
				}
			});
			}
		}
		////HASHCHANGE
		$(window).on('hashchange', function(){
			
		/*	alert(clicked);
			alert(elemCl);*/
			parent.$.fancybox.close();
			if(btnActif == true && verifMenu() != false /*&& (clicked=="portfolio-filter" || clicked=="pagination-list" ||clicked=="fleches" || elemCl=="thumb"|| elemCl=="back")*/){
				//alert("toc");
    			newHash = window.location.hash.substring(1);
    			
				if(root!=actuel && newHash!=""){
					
					newHash = chaine +newHash;
					
					loadContent();
				}else if(newHash!=""){
					
					newHash =addr;
					loadContent();
				}
			}
			oldURL=window.location.toString();
		});
		
		////verification du hash 
        function verifMenu(){


          for(i=0;i<$("#portfolio-filter li a").length; i++){
        	if(lien==$("#portfolio-filter li a").eq(i).attr("href")){
						$("#portfolio-filter li").removeClass('active');
						$("#portfolio-filter li a").eq(i).parent().addClass('active');
        			}
        }
              // if (lien.indexOf("#portfolio")>-1))	
      	
        for(i=0;i<$("#navigation li a").length; i++){
        			var testHash = window.location.hash.substring(0)
        			
					if(testHash == $("#navigation li a").eq(i).attr("href")){
						
						if(testHash.search("#portfolio/") ==-1){
							return false;
							break;
						}
					}
        		}
        }
		
        /*function chargementPage(){
        	var testHash = window.location.hash.substring(0)
        	if(test
        }*/
        
		/*///NAVIGATION PRINCIPALE///*/
		
		///scrollTo (Single Page function)
		$("a.home").click(
		function() {
				//$.scrollTo(0, 800, {queue:true});
				$('html,body').animate({scrollTop : 0},{queue:false,duration:800});
		});
		$("#menu-navigation a").click(function() {
			elemCl="";
			clicked="";
			var ancre =  $(this).attr("href");
			$('html,body').animate({scrollTop : $(ancre).offset().top},{queue:false,duration:800});
				//$.scrollTo($(this).attr("href"), "slow");
				$("#menu-navigation li").removeClass("active");
				$("#menu-navigation li").removeClass(".current-menu-item");
				$(this).parent().addClass("active");
				if($(this).attr("href")=="#hello"){
				window.location.hash ="";
				}else{
				window.location.hash = $(this).attr("href").substr(1);
				}
				return false;
		});
		
		
		/////////////////////////////////
		//MAGIC LINE (barre rouge menu)//
		/////////////////////////////////
		
		//attribution de la classe active pour la magic line
		if(actuel.search(/domaine/)>=1 || actuel.search(/portfolio/)>=1){
			$('#menu-item-86').addClass("active");
		}
		//bouton actif au chargement de la page
		var current;
		//variable pour stocker la section en cours
		var sectionCur ="#hello";
		
		
		if($("li.current-menu-item").length>=1){
			current="li.current-menu-item a";
		}else if($("li.active").length>=1){
			current="li.active a";
		}else{
			current="li a";
		}
		
		//variables pour la magic line
		var $el, leftPos, newWidth, lastLeft,lastWidth;
		$("#navigation").append("<div id='magic-line'></div>");//création de la barre
		
		// Cache it 
		var $magicLine = $("#magic-line");
		//Propriétés de magic LIne
		$magicLine
    	.height(3)
        .width($(current).width()+7)
        .css("left", $(current).position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
    
		lastLeft = $magicLine.data("origLeft");
		lastWidth = $magicLine.data("origWidth");     
		$magicLine.height(3);
		
		
		//Événement Magic Line
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
			$("#navigation li").find("a").click(function(){
				
			});
		}else{
		
		 $("#navigation li").find("a").hover(function() {
		 	$(window).off('scroll',scrollLine);
    	    $el = $(this);
    	    leftPos = $el.position().left;
    	    newWidth = $el.parent().width();
        
    	    $magicLine.stop().animate({
    	    		left: leftPos,
    	    		width: newWidth
    	    });
		}, function() {
			$magicLine.stop().animate({
				left: lastLeft,
				width: lastWidth
			},function(){
				$(window).on('scroll',scrollLine);
			}); 
			
		});
		
		$("#navigation li a").on("click",function() {
    		$(window).off('scroll',scrollLine);
    		$el = $(this);
    		sectionCur = $el.attr('href');
    		leftPos = $el.position().left;
    		newWidth = $el.width();
    		lastLeft=leftPos;
        	lastWidth = newWidth
			$magicLine.stop().animate({
				 left: leftPos,
				width: newWidth
			}, function() {
				leftPos = $magicLine.position().left;
				newWidth = $magicLine.width();
        	});
        });
        }
        ////FUNCTION SCROLLINE et INITSECTION
        
		var navOffsets;//tableau contenant les coordonnées des différentes section dans la page
		var navOffsetsLn;
		initSection();
        
        function initSection(){
				var paddingTop = parseInt($('section').css('paddingTop').substr(0,3));
				if($('section').length >1 ){
				navOffsets = [
					0,
					$('#hello').offset().top-(paddingTop-10),
					$('#portfolio').offset().top-(paddingTop+10),
					$('#apropos').offset().top-(paddingTop+100),
					$('#contact').offset().top-(paddingTop+300),
					
				],
					navOffsetsLn = navOffsets.length;
				
				$(window).on('scroll',scrollLine);
				
				}
			
			}
        
        var indexOfActLnk = 0;//Keep track of active page in scroll

        function scrollLine(){
			
        	for(var i = 0;i<navOffsetsLn;i++){
				var scrollPos = scrollisAt();
				if(scrollPos > navOffsets[i]){
					//else{
						indexOfActLnk = i;
					//}
				}
			}
			if(indexOfActLnk==4){
				indexOfActLnk = 3;
			}else if(indexOfActLnk==3){
				indexOfActLnk = 4;
			}
			$('#navigation a').removeClass('jsLiAct');
			
				$('#navigation li:eq('+(indexOfActLnk-1)+')').find('a').addClass('jsLiAct');
				sectionCur = $('#navigation li:eq('+(indexOfActLnk-1)+')').find('a').attr('href');
			//console.log(sectionCur);
			//console.log(sectionCur);
			if($('section').length >1 ){
				$("#menu-navigation li").removeClass("active");
				$("#menu-navigation li").removeClass(".current-menu-item");
				
				$el = $('#navigation a:eq('+(indexOfActLnk-1)+')');
				$el.parent().addClass("active");
				leftPos = $el.position().left;
				newWidth = $el.width();
				$magicLine.stop().animate({
					 left: leftPos,
					width: newWidth
				},100, function() {
					lastLeft=leftPos;
					lastWidth = newWidth
					
				});
			}
			return false;
		};
		
		
		function scrollisAt() { 
			var w = window,
				d = w.document;
			if (w.pageYOffset != null) return w.pageYOffset;
			if (document.compatMode == "CSS1Compat")return d.documentElement.scrollTop;
			return d.body.scrollTop; 
		}
       
		
		/*///REDIMENSIONNEMENT PAGE///*/
		
		var process;//variable pour stocker le contenu de la div #process
		
		if($('#process ul').length >0){
			process = $('#process').html();
		}
		//var res670 = false;
		//checkProcess();
		
		//FONCTION EXECUTEE AU REDIMENSIONNEMEMNT DE LA PAGE
		$(window).resize(function() {
			//checkProcess();
			$pageWrap.css('height',"auto");
			$('.bloc img').css('height','auto');

			if($('a.thumb img').length >=1){
				imgHeight =$('a.thumb img').outerHeight(true);
			}	
				
			if($('section').length>1){
				//console.log(sectionCur);
				//initSection();
				//$.scrollTo(sectionCur);
				$('html,body').animate({scrollTop : $(sectionCur).offset().top},{queue:false,duration:800});
				scrollLine();
			
			}else{
				
				if($('#navigation li.current-menu-item').length>0){
					$el = $('#navigation li.current-menu-item a');
				}else if($('#navigation li.active a').length>0){
					$el = $('#navigation li.active a');
				}else{
					$el = $('#navigation li a');
				}
				
				leftPos = $el.position().left;
				newWidth = $el.parent().width();
				$magicLine.stop().animate({
					 left: leftPos,
					width: newWidth
				},100, function() {
						lastLeft=leftPos;
						lastWidth = newWidth
						
					});
			}
				

		});
		
		
		//FONCTION CHECK PROCESS
		/*function checkProcess(){
			var windowWidth = $(window).width();
			if(windowWidth < 670 && $('#process .anythingWindow').length<1 && res670==false){
				res670=true;
				$('#process ul').anythingSlider({
				width: 410,      // Override the default CSS width

				 hashTags: false,
				 buildArrows: false,
				 buildNavigation: false,
				autoPlay: true,
				resizeContents: false,
				easing: 'easeInOutExpo'
				});
			}else if( $('#process .anythingWindow').length>0 && windowWidth > 669 && res670==true){
				res670 = false;
				$('#process').empty();
				$('#process').html(process);
				
			}
		}*/
		var Main = Main || {};
		Main.cachedWidth  = $(window).width();
		
		$(window).load(function() {
			Main.gallery = new Gallery();
		}).resize(function() {
			Main.gallery.update();
		});
		
		function Gallery(){
			var container = $('#process ul'),
				clone = container.clone( false ),
				width =$(window).width();
			this.init = function ( width ){
				//console.log(width)
				if( width >= 670 ){
				
					/*container.find('.slides').kwicks({
						max : 500,
						spacing : 0
					}).find('li > a').click(function (){
						return false;
					});*/
				} else {
					$('#process ul').anythingSlider({
					//width: 410,      // Override the default CSS width
					 hashTags: false,
					 buildArrows: false,
					 buildNavigation: false,
					autoPlay: true,
					resizeContents: false,
					easing: 'easeInOutExpo'
					});
				}
			}
			this.update = function () {
				var width = $(window).width();
				if((Main.cachedWidth >= 670 && width <=669) || (Main.cachedWidth <= 669 && width >= 670) ) {
					Main.cachedWidth = width;
					$("#process .anythingSlider").replaceWith( clone );
					container = clone;
					clone = container.clone(false);
					this.init( width );	
				}
			}
			this.init( width );
		}
		
		
});
