class Api::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    posts = current_user.posts
    render json: posts
  end

  def show
  end

  def create
    post = current_user.posts.new(post_params)
    # binding.pry
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def edit
  end

  private
  def post_params
    params.require(:post).permit(:text)
  end


end
