class LikesController < ApplicationController
  
  def create
    @like = Like.create(user_id: current_user.id, timeline_id: params[:timeline_id])
    @likes = Like.where(timeline_id: params[:timeline_id])
    redirect_to timelines_path
  end

  def destroy
    like = Like.find_by(user_id: current_user.id, timeline_id: params[:timeline_id])
    like.destroy
    @likes = Like.where(timeline_id: params[:timeline_id])
  end
  
end
