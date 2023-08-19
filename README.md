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
	cd AngulerJS_202308_Learn/
	git init
	git add .gitignore angular.json package-lock.json package.json README.md tsconfig.app.json tsconfig.json tsconfig.spec.json src/*
	git status  ==> check status 
	git commit -m "commit fst"
	git log
	--git config --global push.autoSetupRemote true
	git push https://github.com/kreshan882/AngulerJS_202308_Learn.git
