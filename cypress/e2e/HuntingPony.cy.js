describe('Оформление заказа', function () {

    it('Авторизация', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').wait(1000).click();
        cy.get('.header__cart > .icon').wait(1000).click();
        cy.get('.is-count-up > .icon').wait(1000).click();
        cy.get('.cart-controls > .button').click();
    })
})