import { test } from '../test-options';
import { faker } from '@faker-js/faker';
import { PageManager } from './page-objects/pageManager';

test("parametrized methods test", async({ page, formLayoutsPageURL }) => {
    const pageManager = new PageManager(page);

    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(" ", "").toLowerCase()}${faker.number.int(1000)}@test.com`;
    const randomPassword = faker.internet.password();
    const randomOption = faker.helpers.arrayElement(["option 1", "option 2"]);

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(randomEmail, randomPassword, randomOption);
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true);
});
