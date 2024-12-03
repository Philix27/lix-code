---
title: "Golang Graphql - Schema First"
description: "Using graphql with golang"
date: "2024-12-03"
published: true
banner: "/golang/graphql-schema.png"
categories: 
    - Golang
    - Backend
---


# Golang SQLC


## Table of content

## Create a go project

Open a folder of choice and run the following command

```sh 
go mod init
```

This would create a new project for you.

## Package installation

Next we will be installing the packages need to generate our go code since this is a schema first approach.
Wr define our graphql schema and the package generates a matching go code.

```sh
go get github.com/99designs/gqlgen
```

Let us add gqlgen to your project’s tools.go.

```sh
printf '// +build tools\npackage tools\nimport _ "github.com/99designs/gqlgen"' | gofmt > tools.go
go mod tidy
```

## Initialization and running the server

Run the code for initialization of the gqlgen. If you watch your folder you would see that some files
has been added.
```sh
go run github.com/99designs/gqlgen init
```

## Run the server

The default port the server is going to be running on is `8080`. But my advice would be to change the port to a desired port number of choice. 
```sh
go run server.go
```

Open the `server.go` file and update the port number to `3344` or any number of choice then run the server again.

```go
const defaultPort = "3344"
```


Once we are done we can open the following url `http://localhost:3344` on our browser to see the graphql client app.

Hurray!!! 

We now have our app working.


## Walkthrough the codebase

So currently we have the `server.go file`, `gqlgen.yml`, `toools.go` and a graph directory. 
In the graph directory we have our graphql schema, housed in the `schema.graphql`. 
Here we write our graphql schema. One thing to note is that we can split our graphql schema into 
multiple files, but we need to ensure we aren't duplicating the types hence we get an error from the compiler.


The `resolver.go` helps us pass any state variable, data or info to our resolvers. Currently it contains a simple struct.
This struct is used for dependency injection.

```go
type Resolver struct{}
```

Next in the graph folder is the `schema.go`. This is where we will be spending most of time. 
The generator exposes the resolvers for us to implement. For every query and mutation in our schema there is a resolver
to be implemented.

The `model` directory houses all the models present in our schema. That is the data types and input types.
The files here are auto generated so we will not modifying them.

Back at the root of our project is the `gqlgen.yml` which is used to configure the codegen. We can use it to tell the 
generator how to generate the go code. In order to make it easy there is a comment above each of the sections to further 
explain how it affects your code.



