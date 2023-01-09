---
sidebar_position: 1
---

# Question Bank

**Use search bar for quick access to Q & A.**

## Question 1

**You are authoring a set of nested azure resource manager templates to deploy multiple azure resources. The templates must be tested before deployment and must follow recommended practices. You need to validate and test the templates before deployment, which tools should u use to answer drag the appropriate tools to the correct requirements ,each tool maybe used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.**

1. Parameter file
2. Template function
3. Azure resource manager test tool kit
4. User defined function
5. What-if operation
6. Azure deployment manager

:::tip Answer

1. azure resource manager test tool kit
2. What-if operation

:::


## Question 2

**You are developing an Azure Durable Function to manage an online ordering process.The process must call an external API to gather product discount information. You need to implement the Azure Durable Function. Which Azure Durable Function types should you use? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.**

1. Orchestrator
2. Entity
3. Client
4. Activity


:::tip Answer

A & B (1 & 2)

:::

## Question 3

**You develop and deploy the following staticwebapp.config.json file to the app_location value specified in the workflow file of.**


:::tip Answer

All Yes

:::

## Question 4

**You develop a containerized application. You plan to deploy the application to a new Azure Container instance by using a third-party continuous integration and continuous delivery (CI/CD) utility. The deployment must be unattended and include all application assets. The third-party utility must only be able to push and pull images from the registry. The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege. You need to ensure that the third-party utility can access the registry. Which authentication options should you use? To answer, select the appropriate options in the answer area**

**NOTE: Each correct selection is worth one point.**


:::tip Answer

1. Box 1: Service principal 
2. Box 2: AcrPush

:::

## Question 5

**Fourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www.fourthcoffee.com domain. Fourth Coffee is migrating this application to Azure. You need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app. A resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named AppServiceLinuxDockerPlan.**

**Which order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**


:::tip Answer

1. #bin bash
2. Az webapp create
3. Az webconfig container set
4. Az webapp config hostname add

:::

## Question #6

**Your company has an Azure subscription. You need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set. You need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.**

**Which of the following is the value that you should configure for the platformFaultDomainCount property?**

1. A. 10
2. B. 30
3. C. Min Value
4. D. Max Value

:::tip Answer

D 


:::

## Question #7

**Your company has an Azure subscription. You need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set. You need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.**

**Which of the following is the value that you should configure for the platformUpdateDomainCount property?**

1. A. 10
2. B. 20
3. C. 30
4. D. 40

:::tip Answer

D 

:::

## Question #8

**DRAG DROP -You are creating an Azure Cosmos DB account that makes use of the SQL API. Data will be added to the account every day by a web application. You need to ensure that an email notification is sent when information is received from IoT devices, and that compute cost is reduced. You decide to deploy a function app.**

**Which of the following should you configure the function app to use? Answer by dragging the correct options from the list to the answer area. Select and Place:**

1. A. Azure cosmos db connector
2. B. Send grid action
3. C. Consumption plan
4. D. Azure event hubs binding
5. E. Send grid binding

:::tip Answer


3. C. Consumption plan
5. E. Send grid binding

:::

## Question #9

**This question requires that you evaluate the underlined text to determine if it is correct. You company has an on-premises deployment of MongoDB, and an Azure Cosmos DB account that makes use of the MongoDB API. You need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account. You include the Data Management Gateway tool in your migration strategy.**

**Instructions: Review the underlined text. If it makes the statement correct, select `No change required.` If the statement is incorrect, select the answer choice that makes the statement correct.**

1. A. No change required
2. B. mongorestore
3. C. Azure Storage Explorer
4. D. AzCopy

:::tip Answer

 B

:::

## Question #10

**You are developing an e-Commerce Web App. You want to use Azure Key Vault to ensure that sign-ins to the e-Commerce Web App are secured by using Azure App Service authentication and Azure Active Directory (AAD).**

**What should you do on the e-Commerce Web App**

1. A. Run the az keyvault secret command.
2. B. Enable Azure AD Connect.
3. C. Enable Managed Service Identity (MSI).
4. D. Create an Azure AD service principal.

:::tip Answer

 C 


:::

## Question #11

**This question requires that you evaluate the underlined text to determine if it is correct. Your Azure Active Directory Azure (Azure AD) tenant has an Azure subscription linked to it. Your developer has created a mobile application that obtains Azure AD access tokens using the OAuth 2 implicit grant type. The mobile application must be registered in Azure AD. You require a redirect URI from the developer for registration purposes.**

**Instructions: Review the underlined text. If it makes the statement correct, select `No change is needed.` If the statement is incorrect, select the answer choice that makes the statement correct.**

1. A. No change required.
2. B. a secret
3. C. a login hint
4. D. a client ID

:::tip Answer

 A 

:::

## Question #12
**You are creating an Azure key vault using PowerShell. Objects deleted from the key vault must be kept for a set period of 90 days.**

**Which two of the following parameters must be used in conjunction to meet the requirement? (Choose two.)**

1. A. EnabledForDeployment
2. B. EnablePurgeProtection
3. C. EnabledForTemplateDeployment
4. D. EnableSoftDelete

:::tip Answer

 B & D

:::

## Question #13

**HOTSPOT - You have an Azure Active Directory (Azure AD) tenant. You want to implement multi-factor authentication by making use of a conditional access policy. The conditional access policy must be applied to all users when they access the Azure portal.**

**Which three settings should you configure? To answer, select the appropriate settings in the answer area. NOTE: Each correct selection is worth one point.Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0001500001.png)

:::tip Answer

 Correct Answer: C 

1. Start Management Studio or Data Tools and in the Connect to Server (or Connect to Database Engine) dialog box, in the Authentication box, select Active Directory - Integrated. No password is needed or can be entered because your existing credentials will be presented for the connection.

![](https://www.examtopics.com/assets/media/exam-media/04273/0001900001.jpg)

2. Select the Options button, and on the Connection Properties page, in the Connect to database box, type the name of the user database you want to connect to.\
(The AD domain name or tenant IDג€ option is only supported for Universal with MFA connection options, otherwise it is greyed out.)

:::

## Question #15

**You are developing an application to transfer data between on-premises file servers and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault and makes use of the Azure Key Vault APIs.**

**You want to configure the application to allow recovery of an accidental deletion of the key vault or key vault objects for 90 days after deletion.**

**What should you do?**

1. A. Run the Add-AzKeyVaultKey cmdlet.

2. B. Run the az keyvault update --enable-soft-delete true --enable-purge-protection true CLI.

3. C. Implement virtual network service endpoints for Azure Key Vault.

4. D. Run the az keyvault update --enable-soft-delete false CLI.

:::tip Answer

 A 

:::

## Question #16

**HOTSPOT -**

**You have developed a Web App for your company. The Web App provides services and must run in multiple regions.**

**You want to be notified whenever the Web App uses more than 85 percent of the available CPU cores over a 5 minute period. Your solution must minimize costs.**

**Which command should you use? To answer, select the appropriate settings in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0002100001.jpg)

:::tip Answer

![](https://www.examtopics.com/assets/media/exam-media/04273/0002200001.jpg)

:::

## Question #17

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.**

**You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.**

**Solution: You include the use of Azure Redis Cache in your design.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #18

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.**

**You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.**

**Solution: You include the use of an Azure Content Delivery Network (CDN) in your design.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

A

:::

## Question #19
**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.**

**You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.**

**Solution: You include the use of a Storage Area Network (SAN) in your design.**

**Does the solution meet the goal?**

1. A. Yes
2. B. No

:::tip Answer

B

:::

## Question #20

**You develop a Web App on a tier D1 app service plan.**

**You notice that page load times increase during periods of peak traffic.**

**You want to implement automatic scaling when CPU load is above 80 percent. Your solution must minimize costs.**

**What should you do first?**

1. A. Enable autoscaling on the Web App.

2. B. Switch to the Premium App Service tier plan.

3. C. Switch to the Standard App Service tier plan.

4. D. Switch to the Azure App Services consumption plan.


:::tip Answer

C

:::

## Question #21

**Your company's Azure subscription includes an Azure Log Analytics workspace.**

**Your company has a hundred on-premises servers that run either Windows Server 2012 R2 or Windows Server 2016, and is linked to the Azure Log Analytics workspace. The Azure Log Analytics workspace is set up to gather performance counters associated with security from these linked servers.**

**You must configure alerts based on the information gathered by the Azure Log Analytics workspace.**

**You have to make sure that alert rules allow for dimensions, and that alert creation time should be kept to a minimum. Furthermore, a single alert notification must be created when the alert is created and when the alert is resolved.**

**You need to make use of the necessary signal type when creating the alert rules.**

**Which of the following is the option you should use?**

1. A. The Activity log signal type.

2. B. The Application Log signal type.

3. C. The Metric signal type.

4. D. The Audit Log signal type.

:::tip Answer

C

:::

## Question #22

**You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.**

**You want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation.**

**You want the application to allow customers to search the index by using regular expressions.**

**What should you do?**

1. A. Configure the SearchMode property of the SearchParameters class.

2. B. Configure the QueryType property of the SearchParameters class.

3. C. Configure the Facets property of the SearchParameters class.

4. D. Configure the Filter property of the SearchParameters class.

:::tip Answer

B

:::

## Question #23

**You are a developer at your company. You need to update the definitions for an existing Logic App.**

**What should you use?**

1. A. the Enterprise Integration Pack (EIP)

2. B. the Logic App Code View

3. C. the API Connections

4. D. the Logic Apps Designer

:::tip Answer

B

:::

## Question #24

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API.The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Basic gateway credentials for the Azure resource.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #25

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API.The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Client cert gateway credentials for the HTTP(s) endpoint.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #26

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API. The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Basic gateway credentials for the HTTP(s) endpoint.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #27

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API.The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Client cert gateway credentials for the Azure resource.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

A

:::

## Question #28

**You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers. You want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation venues. You want the application to list holiday accommodation venues that fall within a specific price range and are within a specified distance to an airport.**

**What should you do?**

1. A. Configure the SearchMode property of the SearchParameters class.

2. B. Configure the QueryType property of the SearchParameters class.

3. C. Configure the Facets property of the SearchParameters class.

4. D. Configure the Filter property of the SearchParameters class.

:::tip Answer

D

:::

## Question #29
**You are a developer at your company. You need to edit the workflows for an existing Logic App. What should you use?**

1. A. the Enterprise Integration Pack (EIP)
2. B. the Logic App Code View
3. C. the API Connections
4. D. the Logic Apps Designer

