Rails.application.routes.draw do

  get 'landing_page/index',		        :as => :landing_page
    
  post 'test_manager/reload_suites'
  post 'test_manager/reload_words'
  post 'analytics_specific/reload_keyboards'
  post 'analytics_specific/reload_testsuites'
  post 'analytics_specific/reload_users'
  post 'word/add_word'

  get 'test_manager/index',		        :as => :test_manager
  get 'testing/index', 			        :as => :testing
  get 'test_setup/index', 		        :as => :test_setup
  get 'analytics_comparatif/index', 	:as => :analytics_comparatif
  get 'analytics_specific/index', 	    :as => :analytics_specific
  get 'analytics_general/index', 	    :as => :analytics_general
  get 'home_page/index', 		        :as => :home_page
    
    class OnlyAjaxRequest
        def matches?(request)
            request.xhr?
        end
    end
    
  match 'words/add_word' => 'words#add_word', :via => [:post]

  resources :attributes
  resources :keyboards
  resources :coordinates
  resources :preset_words
  resources :test_suite_words
  resources :test_suites
  resources :words
  resources :test_units
  resources :test_sessions
  resources :user_roles
  resources :roles
  resources :user_infos
  resources :user_attributes

  devise_for :users
  devise_scope :user do
    root to: "devise/sessions#new"
  end
    
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
