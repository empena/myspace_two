Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users do
      resources :posts
    end
    resources :friends, only: [:index, :update] do
      
    end
  end

end
