# Lab Project MyScret

Project created during the Full-Stack Journey from 1ª Semana DDEV.

## Requirements

### API Features

- Route -> Controller -> UseCase -> Access the DB (DAO, Repository)

- [ ] The user should create an account with email and password
- - [ ] UseCase UseCreate
- [ ] The user should update their profile, only their name and picture.
- [ ] The user should authenticate in the account.
- [ ] The user should create a question.
- [ ] The user should list questions created.
- [ ] The user should remove create a question.
- [ ] The user should answer questions anonymously.
- [ ] Optionally, the user can answer the question with your information.

### Database

- A User can be the author of multiple Questions.
- A User can be the author of multiple Answers.
- A Question has a single User as its author.
- A Question can have multiple Answers.
- An Answer has a single User as its author.
- An Answer belongs to a single Question.

Entities

```text
Users
- userId [uuid, PK]
- name [varchar(255), not null]
- email [varchar(255), not null]
- pictureUrl [varchar(255), not null]
- password [text, not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]

Questions
- questionId [uuid, PK]
- userId [uuid, FK]
- question [varchar(255), not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]

Answers
- answerId [uuid, PK]
- questionId [uuid, FK]
- userId [uuid, FK, null]
- answer [varchar(255), not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]
```

Entity relationships:

```text
User (ID, ...)
|--< Questions (UserID [FK], ...)
    |--< Answers (UserID [FK], QuestionID [FK], ...)
```
