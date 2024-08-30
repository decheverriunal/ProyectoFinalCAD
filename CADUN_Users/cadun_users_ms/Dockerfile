FROM golang:latest

WORKDIR /CADUN_users_ms

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

RUN go build -o ./CADUN_users_ms .
COPY . .
ARG URL=0.0.0.0:8080
EXPOSE 8080


CMD ["./CADUN_users_ms"]