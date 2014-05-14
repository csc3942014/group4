CSC 394 Group 4 Analytics App
=============================

## Encironments

http://jhuria-charca.codio.io:3000
git@github.com:csc3942014/group4.git

Dev server: http://107.170.48.243
ssh with:
user: root
pass: our usual)

--> The repo is in group4 directory... do "git checkout" to download the latest version

## Setting up Rails App

#### Add devise to Gemfile
	
	gem 'devise'

#### Create databases in mysql
#### Configure databases.yml

#### Setup User data with devise

	rails g devise:install
	rails g devise:views
	rails g devise user

	rake db:migrate

	# Add to application_controller.rb to require log-in status
		before_action :authenticate_user!


#### Initialize Bootstrap

	rails g bootstrap:install less
    

## Setting up Data Models

#### Creating Models

    rails g scaffold UserAttribute name:string user_id:integer:index

	rails g scaffold UserInfo user_id:integer:index first_name:string last_name:string email:string

	rails g scaffold Role name:string

	rails g scaffold UserRole name:string:index role_id:integer:index user_id:integer:index

	rails g scaffold TestSession user_id:integer:index test_number:integer start_time:datetime end_time:datetime ease_ranking:integer fun_ranking:integer accuracy_ranking:integer test_suite_id:integer:index test_unit_id:integer:index

	rails g scaffold TestUnit test_session_id:integer:index word_id:integer start_time:datetime end_time:datetime

	rails g scaffold Word word:string length:integer consecutive_letters:integer

	rails g scaffold TestSuite name:string

	rails g scaffold TestSuiteWord test_suite_id:integer:index preset_word_id:integer

	rails g scaffold PresetWord word:string


#### Add relationships & validations - model files

	- UserAttribute:
		validates :user_id, 	presence: true
		validates :name, 		presence: true


	- UserInfo:
		validates :user_id, 	presence: true
		validates :first_name, 	:uniqueness => true, presence: true
		validates :first_name, 	:uniqueness => true, presence: true
		validates :email, 		:uniqueness => true, presence: true


	- Role
		belongs_to :user_role

		validates :name, 		presence: true


	- UserRole
		validates :role_id, 	presence: true
		validates :user_id, 	presence: true


	- TestSession
		validates :user_id, 			presence: true
		validates :start_time, 			presence: true
		validates :end_time, 			presence: true
		validates :accuracy_ranking, 	presence: true
		validates :easqe_ranking,	 	presence: true
		validates :fun_ranking,		 	presence: true
		validates :test_number,		 	presence: true
		validates :test_suite_id,	 	presence: true


	- TestUnit
		validates :test_session_id, 	presence: true
		validates :word_id,			 	presence: true
		validates :start_time,		 	presence: true
		validates :end_time, 			presence: true


	- Word
		belongs_to :test_unit

		validates :word, 				presence: true
		validates :length, 				presence: true
		validates :consecutive_letters, presence: true


	- TestSuite
		belongs_to :test_session

		validates :name, 				presence: true


	- TestSuiteWord
		validates :test_suite_id, 		presence: true
		validates :preset_word_id, 		presence: true


	- PresetWord
		belongs_to :test_suite_word

		validates :word, 				presence: true


#### DB Migration - migration files 

	- UserAttribute
		append to user_id: 		, :null => false
      	append to name: 		, :null => false


	- UserInfo
		append to user_id: 		, :null => false
      	append to first_name: 	, :unique => true, :null => false
      	append to last_name: 	, :unique => true, :null => false
      	append to email: 		, :unique => true, :null => false


	- Role
		append to name: 		, :null => false
	

	- UserRole
		append to role_id: 		, :null => false
		append to user_id: 		, :null => false

	
	- TestSession
		append to user_id: 			, :null => false
		append to start_time: 		, :null => false
		append to end_time: 		, :null => false
		append to accuracy_ranking: , :null => false
		append to ease_ranking: 	, :null => false
		append to fun_ranking: 		, :null => false
		append to test_number: 		, :null => false
		append to test_suite_id: 	, :null => false
	

	- TestUnit
		append to test_session_id: 	, :null => false
		append to word_id: 			, :null => false
		append to start_time: 		, :null => false
		append to end_time: 		, :null => false
	

	- Word
		append to length: 				, :null => false
		append to word: 				, :null => false
		append to consecutive_letters: 	, :null => false
	

	- TestSuite
		append to name: 				, :null => false
	

	- TestSuiteWord
		append to test_suite_id:		, :null => false
		append to preset_word_id: 		, :null => false
	

	- PresetWord
		append to word: 				, :null => false


### `rake db:migrate`


##  Styling with Boostrap

	rails g bootstrap:themed UserAttributes
	rails g bootstrap:themed UserInfos
	rails g bootstrap:themed Roles
	rails g bootstrap:themed UserRoles
	rails g bootstrap:themed TestSessions
	rails g bootstrap:themed TestUnits
	rails g bootstrap:themed Words
	rails g bootstrap:themed TestSuites
	rails g bootstrap:themed TestSuiteWords
	rails g bootstrap:themed PresetWords
