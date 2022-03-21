class Api::MessagesController < ApplicationController
  def index
    ids = Message.ids
    random_greeting_id = ids.sample
    random_greeting = Message.find(random_greeting_id).greeting
    render json: { message: random_greeting}
  end
  private

end
