# Run test command

## 1. ALL CASE 
	 => nightwatch tests/

## 2. RUN BY TAG 
	 => nightwatch --tag TAGNAME

	TAGNAME (Replace what you want)

	TAGNAME list

	- CRUD **(nightwatch --tag CRUD)** test cases are following "test_coffee_user.js, test_coffee_bad_user.js, test_coffee_product.js"

	- SEARCH **(nightwatch --tag SEARCH)** test cases are following "test_coffee_applysort.js, test_coffee_filter.js"

## 3. In case of Test Case break when nothing element to show please try 
	 => nightwatch --tag TAGNAME --retries 3
