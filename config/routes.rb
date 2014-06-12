Rails.application.routes.draw do

    get 'test_manager/testdb',		    :as => :test_db
    
    devise_for :users
    devise_scope :user do
        root to: "devise/sessions#new"
    end

    class OnlyAjaxRequest
        def matches?(request)
            request.xhr?
        end
    end
    

    get 'results/index',		        	:as => :results_page
    get 'landing_page/index',		        :as => :landing_page
    get 'home_page/index', 		        	:as => :home_page

    get 'test_manager/index',		        :as => :test_manager
    get 'testing/index', 					:as => :testing
    get 'test_setup/index', 		        :as => :test_setup
    get 'analytics_comparatif/index', 		:as => :analytics_comparatif
    get 'analytics_specific/index', 	    :as => :analytics_specific
    get 'analytics_general/index', 	    	:as => :analytics_general

    post 'test_manager/reload_suites'
    post 'test_manager/reload_words'
    post 'test_manager/delete_word'

    post 'analytics_specific/reload_keyboards'
    post 'analytics_specific/reload_testsuites'
    post 'analytics_specific/reload_users'
    post 'analytics_specific/loadup_keyboard'
    post 'analytics_specific/loadup_user'

    post 'analytics_comparatif/apply_main_filters'
    post 'analytics_comparatif/apply_sub_filters_kb'
    
    match 'words/add_word' => 'words#add_word', 			:via => [:post]
    match 'words/add_word_suite' => 'words#add_word_suite', :via => [:post]
    match 'test_sessions/setup' => 'test_sessions#setup', 	:via => [:post]

    resources :attributes
    resources :coordinates
    resources :user_infos

    resources :test_sessions, 		except: [:edit]
    resources :test_units, 			except: [:show, :edit]
    resources :test_suites, 		except: [:show, :edit]
    resources :keyboards, 			except: [:edit, :update]
    resources :test_suite_words, 	only: [:index, :new, :create, :destroy]
    resources :words, 				only: [:index, :new, :create, :destroy]
    resources :user_roles, 			only: [:index, :new, :create, :destroy]
    resources :roles, 				only: [:index, :new, :create, :destroy]
    resources :user_attributes, 	only: [:index, :new, :create, :destroy]
end
