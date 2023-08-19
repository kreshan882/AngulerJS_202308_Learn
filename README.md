==============================================================================================
git 
Git-2.36.1-64-bit
Creact repository get url{https://github.com/kreshan882/AngulerJS_202308_Learn.git}
1) git Gui
	>[git config --global user.email "kreshan882@gmail.com"]
	clone exesit repository [ URL  +  LocalPath/newFolder + clone]
	git clone url
	
	================================
	upload Git BAST commant font
	================================
	git config --global user.email "kreshan882@gmail.com"
	cd D:/6_ANGULAR_K/AngulerJS_202308_Learn/
	git init
	git add .gitignore angular.json package.json README.md tsconfig.app.json tsconfig.json tsconfig.spec.json src/*
	git status  ==> check status 
	git commit -m "commit fst"
	git log
	--git config --global push.autoSetupRemote true
	git push https://github.com/kreshan882/AngulerJS_202308_Learn.git


#################################################################################
########## New Customer create web page                                   #######
#################################################################################
https://www.youtube.com/watch?v=TekSMLvVzuo   [[1.08-1.37]
https://www.tutussfunny.com/spring-boot-with-angular-full-stack-project/?expand_article=1   -----> same code
	Add+Edit+Delete

1) initilize angular project [Min1.08]
		https://angular.io/cli
		npm install -g @angular/cli

		ng new AngulerJS_202308_Learn
		npm install
		ng serve
		
2) Start project
		2.1) cd AngulerJS_202308_Learn [min 1.18 -1.37]
		     ng g component customer
			 npm i bootstrap   ===> node_module/bootstrap/dist/css/bootstrap.css
			 
			 google---> bootstrap form
			 and modifiew customer.html page  [min 1.18]
			 
			 Customer.ts ---> add |update|view|Delete
				save/add --> [min 1.23] start
				
				edit   ----> 1.30 start
				
		



3) BAckend SpringBoot [min 0.00 min 1.18]
		https://github.com/kreshan882/SpringBoot_202308_Learn.git
