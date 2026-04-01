install.packages("dplyr")

library(dplyr)

df <- data.frame(
  Sales = c(100, 200, 150),
  Region = c("North", "South", "East"),
  Year = c(2020, 2021, 2022),
  Profit = c(20, 30, 25)
)

df %>% select(Sales, Profit)

df %>% select(-Region)