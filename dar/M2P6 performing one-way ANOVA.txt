method <- factor(c("A","A","A","B","B","B","C","C","C"))

marks <- c(65,70,68,72,75,78,80,82,85)

data <- data.frame(method, marks)

anova_model <- aov(marks ~ method, data = data)

summary(anova_model)

anova_result <- aov(Sepal.Length ~ Species, data = iris)

summary(anova_result)