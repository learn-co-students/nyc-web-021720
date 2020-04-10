class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all.sort_by { |movie| movie.title }

    render json: movies, except: [:updated_at, :created_at]
  end

  def create
    movie = Movie.create(movie_params)

    render json: movie, except: [:updated_at, :created_at]
  end

  def update
    movie = Movie.find(params[:id])
    movie.update(movie_params)

    render json: movie, except: [:updated_at, :created_at]
  end
  
  def destroy
    movie = Movie.find(params[:id])
    movie.destroy

    render json: movie, except: [:updated_at, :created_at]
  end
  
  private

  def movie_params
    params.require(:movie).permit(:year, :imageUrl, :title, :score)
  end
end
