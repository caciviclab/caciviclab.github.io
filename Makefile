.PHONY: build cleanup serve setup test

build:
	bundle exec jekyll build

clean:
	rm -rf _site

setup:
	bundle install

serve:
	bundle exec jekyll serve

test:
	bundle exec htmlproofer --disable-external _site
