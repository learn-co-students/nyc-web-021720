json.extract! post, :id, :title, :content, :author, :like_count, :created_at, :updated_at
json.url post_url(post, format: :json)
