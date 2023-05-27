describe('Тестирование QA Studio', function () {

    it('Авторизация', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon')
       })

   it('Восстановление пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('german@dolnikov.ru');
      cy.get('#restoreEmailButton').click();
      cy.contains('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon')
   })

   it('Авторизация с неправильным паролем', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon')
      })

      it('Авторизация с неправильным логином', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikovvv.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
         })

         it('Авторизация с неправильной валидацией (почта без @)', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon')
            })

         it('Приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.contains('Авторизация прошла успешно');
            cy.get('#exitMessageButton > .exitIcon')
               })
    })




    