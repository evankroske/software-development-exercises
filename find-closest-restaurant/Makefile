#! /usr/bin/make

IMPORTANT_FILES := $(shell find . ! -name "Makefile" ! -name "*~" ! -name ".*" | sed 's/.*\/\(.*\)/\1/g')
EXERCISE_NAME := $(shell pwd | sed 's/.*\/\(.*\)/\1/')

zip: clean-zip
	zip "$(EXERCISE_NAME)" $(IMPORTANT_FILES)

tar: clean-tar
	tar -czf "$(EXERCISE_NAME).tar.gz" $(IMPORTANT_FILES)

clean-tar:
	rm -f *.tar.gz

clean-zip:
	rm -f *.zip

clean: clean-tar clean-zip
