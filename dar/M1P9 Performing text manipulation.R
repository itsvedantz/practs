install.packages("stringr") 
library(stringr)

text <- "DataScience"

print(str_sub(text, 1, 4))
print(str_sub(text, -3, -1))

str_sub(text, 1, 4) <- "Bio"
print(text)

text <- "red, blue, green"
print(str_split(text, ","))