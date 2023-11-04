FROM maven:latest as build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src/ ./src/
RUN mvn package -DskipTests

FROM openjdk:17
WORKDIR /app
COPY --from=build /app/target/hackathon-backend-0.0.1-SNAPSHOT.jar ./app.jar
ENV BASE_URL=$BASE_URL
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]