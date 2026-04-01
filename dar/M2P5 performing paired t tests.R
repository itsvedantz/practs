pre_test <- c(27, 30, 28, 35, 22, 29, 31)
post_test <- c(31, 34, 29, 35, 27, 32, 33)

result <- t.test(pre_test, post_test, paired = TRUE)

print(result)