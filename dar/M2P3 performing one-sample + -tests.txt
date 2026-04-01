data <- c(25, 30, 28, 35, 22, 29, 31)

known_value <- 26

result <- t.test(data, mu = known_value)

print(result)