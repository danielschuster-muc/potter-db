# To update the sitemap run
# bundle exec ruby config/sitemap.rb
# or use the rake task https://github.com/kjvarga/sitemap_generator#rake-tasks
# bundle exec rake sitemap:refresh

# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = 'https://api.potterdb.com'
SitemapGenerator::Sitemap.compress = false

SitemapGenerator::Sitemap.create do
  # Put links creation logic here.
  #
  # The root path '/' and sitemap index file are added automatically for you.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  #
  # Examples:
  #
  # Add '/articles'
  #
  #   add articles_path, :priority => 0.7, :changefreq => 'daily'
  #
  # Add all articles:
  #
  #   Article.find_each do |article|
  #     add article_path(article), :lastmod => article.updated_at
  #   end

  add v1_books_path, priority: 0.9, changefreq: 'weekly'
  add v1_characters_path, priority: 1, changefreq: 'weekly'
  add v1_movies_path, priority: 0.9, changefreq: 'weekly'
  add v1_potions_path, priority: 0.8, changefreq: 'weekly'
  add v1_spells_path, priority: 0.7, changefreq: 'weekly'
end

SitemapGenerator::Sitemap.ping_search_engines # Not needed if you use the rake tasks
