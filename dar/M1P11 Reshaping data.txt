library(dplyr)

df <- data.frame(
  id = c(1, 1, 2, 2, 3),
  score = c(10, 10, 20, 20, 30)
)

distinct(df)