library(dplyr)

df <- data.frame(
  subject = c("Maths", "Science", "Maths", "English", "Science", "Maths")
)

table(df$subject)

count(df, subject)