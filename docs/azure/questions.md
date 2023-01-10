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

 ![](https://www.examtopics.com/assets/media/exam-media/04273/0001700001.png)

:::

## Question #14

**You manage an Azure SQL database that allows for Azure AD authentication.**

**You need to make sure that database developers can connect to the SQL database via Microsoft SQL Server Management Studio (SSMS). You also need to make sure the developers use their on-premises Active Directory account for authentication. Your strategy should allow for authentication prompts to be kept to a minimum.**

**Which of the following should you implement?**

1. A. Azure AD token.

2. B. Azure Multi-Factor authentication.

3. C. Active Directory integrated authentication.

4. D. OATH software tokens.

:::tip Answer

C

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

 B

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

:::tip Answer

A

:::

## Question #30

**DRAG DROP -**

**You are a developer for a company that provides a bookings management service in the tourism industry. You are implementing Azure Search for the tour agencies listed in your company's solution. You create the index in Azure Search. You now need to use the Azure Search .NET SDK to import the relevant data into the Azure Search service. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions from left to right and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0003200001.jpg)


:::tip Answer

![](https://www.examtopics.com/assets/media/exam-media/04273/0003300001.jpg)

:::

## Question #31

**You are developing an application that applies a set of governance policies for internal and external services, as well as for applications. You develop a stateful ASP.NET Core 2.1 web application named PolicyApp and deploy it to an Azure App Service Web App. The PolicyApp reacts to events from Azure Event Grid and performs policy actions based on those events.**

**You have the following requirements:**

✑ **Authentication events must be used to monitor users when they sign in and sign out.**

✑ **All authentication events must be processed by PolicyApp.**

✑ **Sign outs must be processed as fast as possible.**

**What should you do?**

1. A. Create a new Azure Event Grid subscription for all authentication events. Use the subscription to process sign-out events.

2. B. Create a separate Azure Event Grid handler for sign-in and sign-out events.

3. C. Create separate Azure Event Grid topics and subscriptions for sign-in and sign-out events.

4. D. Add a subject prefix to sign-out events. Create an Azure Event Grid subscription. Configure the subscription to use the subjectBeginsWith filter.

:::tip Answer

D

:::

## Question #32

**HOTSPOT -**

**You are developing a C++ application that compiles to a native application named process.exe. The application accepts images as input and returns images in one of the following image formats: GIF, PNG, or JPEG. You must deploy the application as an Azure Function. You need to configure the function and host json files. How should you complete the json files? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0003600001.png)

:::tip Answer

![](https://www.examtopics.com/assets/media/exam-media/04273/0003700001.png)

:::

## Question #33

**HOTSPOT**

**You are developing an Azure Static Web app that contains training materials for a tool company. Each tool's training material is contained in a static web page that is linked from the tool's publicly available description page.**

**A user must be authenticated using Azure AD prior to viewing training.**

**You need to ensure that the user can view training material pages after authentication.**

**How should you complete the configuration file? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image377.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image378.png)

:::

## Question #34

**HOTSPOT**

**You are authoring a set of nested Azure Resource Manager templates to deploy Azure resources. You author an Azure Resource Manager template named mainTemplate.json that contains the following linked templates: linkedTemplate1.json, linkedTemplate2.json.**

**You add parameters to a parameters template file named mainTemplate.parameters,json. You save all templates on a local device in the C:\templates\ folder.**

**You have the following requirements:**

- **Store the templates in Azure for later deployment.**
- **Enable versioning of the templates.**
- **Manage access to the templates by using Azure RBAC.**
- **Ensure that users have read-only access to the templates.**
- **Allow users to deploy the templates.**

**You need to store the templates in Azure. How should you complete the command? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image379.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image380.png)
:::

## Question #35

**HOTSPOT**

**You are developing a service where customers can report news events from a browser using Azure Web PubSub. The service is implemented as an Azure Function App that uses the JSON WebSocket subprotocol to receive news events.**

**You need to implement the bindings for the Azure Function App.**

**How should you configure the binding? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image381.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image382.png)
:::

## Question #36

**HOTSPOT**

**You are building a software-as-a-service (SaaS) application that analyzes DNA data that will run on Azure virtual machines (VMs) in an availability zone. The data is stored on managed disks attached to the VM. The performance of the analysis is determined by the speed of the disk attached to the VM.**

**You have the following requirements:**

- **The application must be able to quickly revert to the previous day's data if a systemic error is detected.**
- **The application must minimize downtime in the case of an Azure datacenter outage.**

**You need to provision the managed disk for the VM to maximize performance while meeting the requirements.**

**Which type of Azure Managed Disk should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image383.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image384.png)
:::

## Question #37

**HOTSPOT-**


**You are developing an application that includes two Docker containers. The application must meet the following requirements:**

1. **The containers must not run as root.**

2. **The containers must be deployed to Azure Container Instances by using a YAML file.**

3. **The containers must share a lifecycle, resources, local network, and storage volume.**

4. **The storage volume must persist through container crashes.**

5. **The storage volume must be deployed on stop or restart of the containers.**

**You need to configure Azure Container Instances for the application. Which configuration values should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**


:::tip Answer
 ![](https://img.examtopics.com/az-204/image386.png)
:::

## Question #38

**HOTSPOT -**

**You are implementing a software as a service (SaaS) ASP.NET Core web service that will run as an Azure Web App. The web service will use an on-premises SQL Server database for storage. The web service also includes a WebJob that processes data updates. Four customers will use the web service.**

✑ **Each instance of the WebJob processes data for a single customer and must run as a singleton instance.**

✑ **Each deployment must be tested by using deployment slots prior to serving production data.**

✑ **Azure costs must be minimized.**

✑ **Azure resources must be located in an isolated network.**

**You need to configure the App Service plan for the Web App. How should you configure the App Service plan? To answer, select the appropriate settings in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**
![](https://www.examtopics.com/assets/media/exam-media/04273/0008800001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0008900001.jpg)
:::

## Question #39

**DRAG DROP -**

**You are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs on an Azure Function app that is triggered by an Azure Storage queue. You are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).You need to configure Kubernetes Custom Resource Definitions (CRD) for the Azure Function.**

**Which CRDs should you configure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0009000001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0009100001.jpg)
:::

## Question #40

**HOTSPOT -**

**You are creating a CLI script that creates an Azure web app and related services in Azure App Service. The web app uses the following variables:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0009200001.png)

**You need to automatically deploy code from GitHub to the newly created web app. How should you complete the script? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0009300001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0009400001.jpg)
:::


## Question #41

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2. When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute. You need to design the process that starts the photo processing.**

**Solution: Trigger the photo processing from Blob storage events.**

**Does the solution meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #42

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.** 

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Update the web.config file to include the applicationInitialization configuration element. Specify custom initialization actions to run the scripts. Does the solution meet the goal?**

1.  A. No
2.  B. Yes

:::tip Answer
A
:::

## Question #43

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Enable auto swap for the Testing slot. Deploy the app to the Testing slot.** 

**Does the solution meet the goal?**

1.   A. No
2.   B. Yes

:::tip Answer
B
:::

## Question #44

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Disable auto swap. Update the app with a method named statuscheck to run the scripts. Re-enable auto swap and deploy the app to the Production slot.**

**Does the solution meet the goal?**

1. A. No

2. B. Yes

:::tip Answer
B
:::

## Question #45

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.**

**When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute. You need to design the process that starts the photo processing.**

**Solution: Convert the Azure Storage account to a BlockBlobStorage storage account.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
B
:::

## Question #46

**HOTSPOT -**

**You are developing an Azure Web App. You configure TLS mutual authentication for the web app. You need to validate the client certificate in the web app. To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0010000001.jpg)


:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0010100001.jpg)
:::

## Question #47

**DRAG DROP -**

**You are developing a Docker/Go using Azure App Service Web App for Containers. You plan to run the container in an App Service on Linux. You identify a Docker container image to use. None of your current resource groups reside in a location that supports Linux. You must minimize the number of resource groups required. You need to create the application and perform an initial deployment.**

**Which three Azure CLI commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**


![](https://www.examtopics.com/assets/media/exam-media/04273/0010200001.png)


:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0010300001.png)
:::

## Question #48

**DRAG DROP -**

**Fourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www.fourthcoffee.com domain. Fourth Coffee is migrating this application to Azure. You need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app. A resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named AppServiceLinuxDockerPlan.**

**Which order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0010500001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0010600001.jpg)
:::

## Question #49

**DRAG DROP -**

**You are developing a serverless Java application on Azure. You create a new Azure Key Vault to work with secrets from a new Azure Functions application. The application must meet the following requirements:**

✑ **Reference the Azure Key Vault without requiring any changes to the Java code.**

✑ **Dynamically add and remove instances of the Azure Functions host based on the number of incoming application events.**

✑ **Ensure that instances are perpetually warm to avoid any cold starts.**

✑ **Connect to a VNet.**

✑ **Authentication to the Azure Key Vault instance must be removed if the Azure Function application is deleted. You need to grant the Azure Functions application access to the Azure Key Vault.**

**Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0010800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0010900001.png)
:::

## Question #50

**You develop a website. You plan to host the website in Azure. You expect the website to experience high traffic volumes after it is published. You must ensure that the website remains available and responsive while minimizing cost. You need to deploy the website.**

**What should you do?**

1. A. Deploy the website to a virtual machine. Configure the virtual machine to automatically scale when the CPU load is high.

2. B. Deploy the website to an App Service that uses the Shared service tier. Configure the App Service plan to automatically scale when the CPU load is high.

3. C. Deploy the website to a virtual machine. Configure a Scale Set to increase the virtual machine instance count when the CPU load is high.

4. D. Deploy the website to an App Service that uses the Standard service tier. Configure the App Service plan to automatically scale when the CPU load is high.

:::tip Answer
D
:::

## Question #51

**HOTSPOT -**

**A company is developing a Java web app. The web app code is hosted in a GitHub repository located at https://github.com/Contoso/webapp. The web app must be evaluated before it is moved to production. You must deploy the initial code release to a deployment slot named staging.You need to create the web app and deploy the code.**

**How should you complete the commands? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0011100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0011200001.png)
:::

## Question #52

**HOTSPOT -**

**You have a web service that is used to pay for food deliveries. The web service uses Azure Cosmos DB as the data store. You plan to add a new feature that allows users to set a tip amount. The new feature requires that a property named tip on the document in Cosmos DB must be present and contain a numeric value. There are many existing websites and mobile apps that use the web service that will not be updated to set the tip property for some time.**

**How should you complete the trigger?**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0011400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0011500001.jpg)
:::

## Question #53

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob. The app continues to time out after four minutes. The app must process the blob data. You need to ensure the app does not time out and processes the blob data.**

**Solution: Use the Durable Function async pattern to process the blob data.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
B
:::

## Question #54

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob. The app continues to time out after four minutes. The app must process the blob data. You need to ensure the app does not time out and processes the blob data.**

**Solution: Pass the HTTP trigger payload into an Azure Service Bus queue to be processed by a queue trigger function and return an immediate HTTP success response.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
A
:::

## Question #55

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob. The app continues to time out after four minutes. The app must process the blob data. You need to ensure the app does not time out and processes the blob data.**

**Solution: Configure the app to use an App Service hosting plan and enable the Always On setting.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
B
:::

## Question #56

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.You need to design the process that starts the photo processing.**

**Solution: Move photo processing to an Azure Function triggered from the blob upload.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
A
:::

## Question #57

**You are developing an application that uses Azure Blob storage. The application must read the transaction logs of all the changes that occur to the blobs and the blob metadata in the storage account for auditing purposes. The changes must be in the order in which they occurred, include only create, update, delete, and copy operations and be retained for compliance reasons. You need to process the transaction logs asynchronously.**

**What should you do?**

1. A. Process all Azure Blob storage events by using Azure Event Grid with a subscriber Azure Function app.

2. B. Enable the change feed on the storage account and process all changes for available events.

3. C. Process all Azure Storage Analytics logs for successful blob events.

4. D. Use the Azure Monitor HTTP Data Collector API and scan the request body for successful blob events.

:::tip Answer
B
:::

## Question #58

**DRAG DROP -**

**You plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a series of application files including ContosoApp.dll. You need to create a Dockerfile document that meets the following requirements:**

✑ **Call setupScripts.ps1 when the container is built.**

✑ **Run ContosoApp.dll when the container starts.**

**The Dockerfile document must be created in the same folder where ContosoApp.dll and setupScript.ps1 are stored.**

**Which five commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012100001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012100002.png)
:::

## Question #59

**You are developing an Azure Function App that processes images that are uploaded to an Azure Blob container.Images must be processed as quickly as possible after they are uploaded, and the solution must minimize latency. You create code to process images when the Function App is triggered. You need to configure the Function App.**

**What should you do?**

1. A. Use an App Service plan. Configure the Function App to use an Azure Blob Storage input trigger.

2. B. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage trigger.

3. C. Use a Consumption plan. Configure the Function App to use a Timer trigger.

4. D. Use an App Service plan. Configure the Function App to use an Azure Blob Storage trigger.

5. E. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage input trigger.

:::tip Answer
B
:::

## Question #60

**HOTSPOT -**

**You are configuring a new development environment for a Java application. The environment requires a Virtual Machine Scale Set (VMSS), several storage accounts, and networking components. The VMSS must not be created until the storage accounts have been successfully created and an associated load balancer and virtual network is configured.**

**How should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012400001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012500001.png)
:::

## Question #61

**HOTSPOT -**

**You are developing an Azure Function App by using Visual Studio. The app will process orders input by an Azure Web App. The web app places the order information into Azure Queue Storage. You need to review the Azure Function App code shown below.**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012700001.png)

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012700002.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012800001.png)
:::

## Question #62

**DRAG DROP -**

**You are developing a solution for a hospital to support the following use cases:**

✑ **The most recent patient status details must be retrieved even if multiple users in different locations have updated the patient record.**

✑ **Patient health monitoring data retrieved must be the current version or the prior version.**

✑ **After a patient is discharged and all charges have been assessed, the patient billing record contains the final charges.**

**You provision a Cosmos DB NoSQL database and set the default consistency level for the database account to Strong. You set the value for Indexing Mode to Consistent. You need to minimize latency and any impact to the availability of the solution. You must override the default consistency level at the query level to meet the required consistency guarantees for the scenarios.**

**Which consistency levels should you implement? To answer, drag the appropriate consistency levels to the correct requirements. Each consistency level may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012900004.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012900005.png)
:::

## Question #63

**HOTSPOT -**

**You are configuring a development environment for your team. You deploy the latest Visual Studio image from the Azure Marketplace to your Azure subscription. The development environment requires several software development kits (SDKs) and third-party components to support application development across the organization. You install and customize the deployed virtual machine (VM) for your development team. The customized VM must be saved to allow provisioning of a new team member development environment. You need to save the customized VM for future provisioning.**

**Which tools or services should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013100002.png)
:::

## Question #64

**You are preparing to deploy a website to an Azure Web App from a GitHub repository. The website includes static content generated by a script. You plan to use the Azure Web App continuous deployment feature. You need to run the static generation script before the website starts serving traffic.**

**What are two possible ways to achieve this goal? Each correct answer presents a complete solution.**

**NOTE: Each correct selection is worth one point.**

1. A. Add the path to the static content generation tool to WEBSITE_RUN_FROM_PACKAGE setting in the host.json file.

2. B. Add a PreBuild target in the websites csproj project file that runs the static content generation script.

3. C. Create a file named run.cmd in the folder /run that calls a script which generates the static content and deploys the website.

4. D. Create a file named .deployment in the root of the repository that calls a script which generates the static content and deploys the website.

:::tip Answer
A & D
:::

## Question #65

**DRAG DROP -**

**You are developing an application to use Azure Blob storage. You have configured Azure Blob storage to include change feeds. A copy of your storage account must be created in another region. Data must be copied from the current storage account to the new storage account directly between the storage servers. You need to create a copy of the storage account in another region and copy the data.**

**In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013400002.jpg)
:::

## Question #66

**DRAG DROP -**

**You are preparing to deploy an Azure virtual machine (VM)-based application. The VMs that run the application have the following requirements:**

✑ **When a VM is provisioned the firewall must be automatically configured before it can access Azure resources.**

✑ **Supporting services must be installed by using an Azure PowerShell script that is stored in Azure Storage.**

**You need to ensure that the requirements are met. Which features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.** 

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013600002.jpg)
:::

## Question #67

**HOTSPOT -**

**A company is developing a Node.js web app. The web app code is hosted in a GitHub repository located at https://github.com/TailSpinToys/webapp. The web app must be reviewed before it is moved to production. You must deploy the initial code release to a deployment slot named review. You need to create the web app and deploy the code.**

**How should you complete the commands? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013700001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013800001.jpg)
:::

## Question #68

**HOTSPOT -**

**You are developing an application that needs access to an Azure virtual machine (VM). The access lifecycle for the application must be associated with the VM service instance. You need to enable managed identity for the VM.**

**How should you complete the PowerShell segment? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013900001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014000001.jpg)
:::

## Question #69

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.**

**When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute. You need to design the process that starts the photo processing.**

**Solution: Create an Azure Function app that uses the Consumption hosting model and that is triggered from the blob upload.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
A
:::

## Question #70

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Update the app with a method named statuscheck to run the scripts. Update the app settings for the app. Set the**

**WEBSITE_SWAP_WARMUP_PING_PATH and WEBSITE_SWAP_WARMUP_PING_STATUSES with a path to the new method and appropriate response codes.**

**Does the solution meet the goal?**

1. A. No

2. B. Yes

:::tip Answer
A
:::

## Question #71

**HOTSPOT -**

**You create the following PowerShell script:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014200001.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014300001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014300002.png)
:::

## Question #72

**DRAG DROP -**

**You are developing an Azure Function app. The app must meet the following requirements:**

✑ **Enable developers to write the functions by using the Rust language.**

✑ **Declaratively connect to an Azure Blob Storage account.**

**You need to implement the app. Which Azure Function app features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014500002.png)
:::

## Question #73

**HOTSPOT -**

**You are developing an ASP.NET Core web application. You plan to deploy the application to Azure Web App for Containers. The application needs to store runtime diagnostic data that must be persisted across application restarts. You have the following code:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014600001.jpg)

**You need to configure the application settings so that diagnostic data is stored as required. How should you configure the web app's settings? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014700001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014700002.jpg)
:::

## Question #74

**You are developing a web app that is protected by Azure Web Application Firewall (WAF). All traffic to the web app is routed through an Azure Application Gateway instance that is used by multiple web apps. The web app address is contoso.azurewebsites.net. All traffic must be secured with SSL. The Azure Application Gateway instance is used by multiple web apps. You need to configure the Azure Application Gateway for the web app.**

**Which two actions should you perform? Each correct answer presents part of the solution.**

**NOTE: Each correct selection is worth one point.**

1. A. In the Azure Application Gateway's HTTP setting, enable the Use for App service setting.

2. B. Convert the web app to run in an Azure App service environment (ASE).

3. C. Add an authentication certificate for contoso.azurewebsites.net to the Azure Application Gateway.

4. D. In the Azure Application Gateway's HTTP setting, set the value of the Override backend path option to contoso22.azurewebsites.net.

:::tip Answer
A & D
:::

## Question #75

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure  
Storage Blob storage. The storage account type is General-purpose V2.  
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.  
You need to design the process that starts the photo processing.  
Solution: Use the Azure Blob Storage change feed to trigger photo processing.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

## Question #76

**You are developing a web application that runs as an Azure Web App. The web application stores data in Azure SQL Database and stores files in an Azure  
Storage account. The web application makes HTTP requests to external services as part of normal operations.  
The web application is instrumented with Application Insights. The external services are OpenTelemetry compliant.  
You need to ensure that the customer ID of the signed in user is associated with all operations throughout the overall system.  
What should you do?**

1.  A. Add the customer ID for the signed in user to the CorrelationContext in the web application
2.  B. On the current SpanContext, set the TraceId to the customer ID for the signed in user
3.  C. Set the header Ocp-Apim-Trace to the customer ID for the signed in user
4.  D. Create a new SpanContext with the TraceFlags value set to the customer ID for the signed in user

:::tip Answer
A
:::

## Question #77

**HOTSPOT -  
You are developing an Azure Function App. You develop code by using a language that is not supported by the Azure Function App host. The code language supports HTTP primitives.  
You must deploy the code to a production Azure Function App environment.  
You need to configure the app for deployment.  
Which configuration values should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point. 
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0015200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0015300001.png)
:::

## Question #78

**DRAG DROP -  
You provision virtual machines (VMs) as development environments.  
One VM does not start. The VM is stuck in a Windows update process. You attach the OS disk for the affected VM to a recovery VM.  
You need to correct the issue.  
In which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0015500001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0015500002.jpg)
:::

## Question #79

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.  
The app continues to time out after four minutes. The app must process the blob data.  
You need to ensure the app does not time out and processes the blob data.  
Solution: Update the functionTimeout property of the host.json project file to 10 minutes.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
 B
:::

## Question #80

**HOTSPOT -  
You are developing an Azure Durable Function based application that processes a list of input values. The application is monitored using a console application that retrieves JSON data from an Azure Function diagnostic endpoint.  
During processing a single instance of invalid input does not cause the function to fail. Invalid input must be available to the monitoring application.  
You need to implement the Azure Durable Function and the monitoring console application.  
How should you complete the code segments? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**


![](https://www.examtopics.com/assets/media/exam-media/04273/0015800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0015900001.jpg)
:::

## Question #81

**You are developing an Azure Durable Function to manage an online ordering process.  
The process must call an external API to gather product discount information.  
You need to implement the Azure Durable Function.  
Which Azure Durable Function types should you use? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Orchestrator
2.  B. Entity
3.  C. Client
4.  D. Activity

:::tip Answer
A & B
:::

## Question #82

**DRAG DROP -  
You are authoring a set of nested Azure Resource Manager templates to deploy multiple Azure resources.  
The templates must be tested before deployment and must follow recommended practices.  
You need to validate and test the templates before deployment.  
Which tools should you use? To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0016200001.png)


:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0016200002.png)
:::

## Question #83

**You develop Azure Durable Functions to manage vehicle loans.   
The loan process includes multiple actions that must be run in a specified order. One of the actions includes a customer credit check process, which may require multiple days to process.   
You need to implement Azure Durable Functions for the loan process.   
Which Azure Durable Functions type should you use?**

1.  A. orchestrator
2.  B. client
3.  C. entity
4.  D. activity

:::tip Answer
A
:::

## Question #84

**HOTSPOT-    
You are developing an Azure Function app.    
All functions in the app meet the following requirements:  
• Run until either a successful run or until 10 run attempts occur.  
• Ensure that there are at least 20 seconds between attempts for up to 15 minutes.  
You need to configure the host.json file.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.    
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image387.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image388.png)
:::

## Question #85

**You develop Azure Web Apps for a commercial diving company. Regulations require that all divers fill out a health questionnaire every 15 days after each diving job starts.  
You need to configure the Azure Web Apps so that the instance count scales up when divers are filling out the questionnaire and scales down after they are complete.  
You need to configure autoscaling.  
What are two possible auto scaling configurations to achieve this goal? Each correct answer presents a complete solution.   
NOTE: Each correct selection is worth one point.**

1.  A. Recurrence profile
2.  B. CPU usage-based autoscaling
3.  C. Fixed date profile
4.  D. Predictive autoscaling

:::tip Answer
C & D
:::

## Question #86

**HOTSPOT -  
You are developing a solution that uses the Azure Storage Client library for .NET. You have the following code: (Line numbers are included for reference only.)**

![](https://www.examtopics.com/assets/media/exam-media/04273/0020500001.jpg)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0020600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0020600002.png)
:::

## Question #87

**You are building a website that uses Azure Blob storage for data storage. You configure Azure Blob storage lifecycle to move all blobs to the archive tier after 30 days.  
Customers have requested a service-level agreement (SLA) for viewing data older than 30 days.  
You need to document the minimum SLA for data recovery.  
Which SLA should you use?**

1.  A. at least two days
2.  B. between one and 15 hours
3.  C. at least one day
4.  D. between zero and 60 minutes

:::tip Answer
B
:::

## Question #88

**HOTSPOT -  
You are developing a ticket reservation system for an airline.  
The storage solution for the application must meet the following requirements:  
✑ Ensure at least 99.99% availability and provide low latency.  
✑ Accept reservations even when localized network outages or other unforeseen failures occur.  
✑ Process reservations in the exact sequence as reservations are submitted to minimize overbooking or selling the same seat to multiple travelers.  
✑ Allow simultaneous and out-of-order reservations with a maximum five-second tolerance window.  
You provision a resource group named airlineResourceGroup in the Azure South-Central US region.  
You need to provision a SQL API Cosmos DB account to support the app.  
How should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0020900001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0021100001.jpg)
:::

## Question #89

**HOTSPOT -  
You are preparing to deploy a Python website to an Azure Web App using a container. The solution will use multiple containers in the same container group. The  
Dockerfile that builds the container is as follows:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0021300001.png) 

**You build a container by using the following command. The Azure Container Registry instance named images is a private registry.** 

![](https://www.examtopics.com/assets/media/exam-media/04273/0021300002.png) 

**The user name and password for the registry is admin.  
The Web App must always run the same version of the website regardless of future builds.  
You need to create an Azure Web App to run the website.  
How should you complete the commands? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0021400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0021500001.jpg)
:::

## Question #90

**HOTSPOT -  
You are developing a back-end Azure App Service that scales based on the number of messages contained in a Service Bus queue.  
A rule already exists to scale up the App Service when the average queue length of unprocessed and valid queue messages is greater than 1000.  
You need to add a new rule that will continuously scale down the App Service as long as the scale up condition is not met.  
How should you configure the Scale rule? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0021700001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0021900001.jpg)

**Box 1: Service bus queue -
You are developing a back-end Azure App Service that scales based on the number of messages contained in a Service Bus queue.**

**Box 2: ActiveMessage Count -
ActiveMessageCount: Messages in the queue or subscription that are in the active state and ready for delivery.**

**Box 3: Count -**

**Box 4: Less than or equal to -
You need to add a new rule that will continuously scale down the App Service as long as the scale up condition is not met.**

**Box 5: Decrease count by**
:::

## Question #91

**DRAG DROP -  
You have an application that uses Azure Blob storage.  
You need to update the metadata of the blobs.  
Which three methods should you use to develop the solution? To answer, move the appropriate methods from the list of methods to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022100001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0022100002.jpg)
:::

## Question #92

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce  
2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.  
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.  
You need to implement a solution to receive the device data.  
Solution: Provision an Azure Event Grid. Configure the machine identifier as the partition key and enable capture.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
A
:::

## Question #93

**You develop Azure solutions.  
A .NET application needs to receive a message each time an Azure virtual machine finishes processing data. The messages must NOT persist after being processed by the receiving application.  
You need to implement the .NET object that will receive the messages.  
Which object should you use?**

1.  A. QueueClient
2.  B. SubscriptionClient
3.  C. TopicClient
4.  D. CloudQueueClient

:::tip Answer
D
:::

## Question #94

**DRAG DROP -  
You are maintaining an existing application that uses an Azure Blob GPv1 Premium storage account. Data older than three months is rarely used.  
Data newer than three months must be available immediately. Data older than a year must be saved but does not need to be available immediately.  
You need to configure the account to support a lifecycle management rule that moves blob data to archive storage for data not modified in the last year.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0022400002.jpg)
:::

## Question #95

**You develop Azure solutions.  
You must connect to a No-SQL globally-distributed database by using the .NET API.  
You need to create an object to configure and execute requests in the database.  
Which code segment should you use?**

1.  A. new Container(EndpointUri, PrimaryKey);
2.  B. new Database(EndpointUri, PrimaryKey);
3.  C. new CosmosClient(EndpointUri, PrimaryKey);

:::tip Answer
C
:::

## Question #96

**You have an existing Azure storage account that stores large volumes of data across multiple containers.  
You need to copy all data from the existing storage account to a new storage account. The copy process must meet the following requirements:  
✑ Automate data movement.  
✑ Minimize user input required to perform the operation.  
✑ Ensure that the data movement process is recoverable.  
What should you use?**

1.  A. AzCopy
2.  B. Azure Storage Explorer
3.  C. Azure portal
4.  D. .NET Storage Client Library

:::tip Answer
A
:::

## Question #97

**DRAG DROP -  
You are developing a web service that will run on Azure virtual machines that use Azure Storage. You configure all virtual machines to use managed identities.  
You have the following requirements:  
✑ Secret-based authentication mechanisms are not permitted for accessing an Azure Storage account.  
✑ Must use only Azure Instance Metadata Service endpoints.  
You need to write code to retrieve an access token to access Azure Storage. To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022700003.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0022800001.jpg)
:::

## Question #98
**DRAG DROP -  
You are developing a new page for a website that uses Azure Cosmos DB for data storage. The feature uses documents that have the following format:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022900001.png)

**You must display data for the new page in a specific order. You create the following query for the page:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022900002.png) 

**You need to configure a Cosmos DB policy to support the query.  
How should you configure the policy? To answer, drag the appropriate JSON segments to the correct locations. Each JSON segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0023100001.png)
:::

## Question #99

**HOTSPOT -  
You are building a traffic monitoring system that monitors traffic along six highways. The system produces time series analysis-based reports for each highway.  
Data from traffic sensors are stored in Azure Event Hub.  
Traffic data is consumed by four departments. Each department has an Azure Web App that displays the time series-based reports and contains a WebJob that processes the incoming data from Event Hub. All Web Apps run on App Service Plans with three instances.  
Data throughput must be maximized. Latency must be minimized.  
You need to implement the Azure Event Hub.  
Which settings should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023300001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0023400001.png)
:::

## Question #100

**DRAG DROP -  
You are developing a microservices solution. You plan to deploy the solution to a multinode Azure Kubernetes Service (AKS) cluster.  
You need to deploy a solution that includes the following features:  
✑ reverse proxy capabilities  
✑ configurable traffic routing  
✑ TLS termination with a custom certificate  
Which components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023500004.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0023600001.jpg)
:::

## Question #101

**You are implementing an order processing system. A point of sale application publishes orders to topics in an Azure Service Bus queue. The Label property for the topic includes the following data:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023700002.png)

**The system has the following requirements for subscriptions:**

**You need to implement filtering and maximize throughput while evaluating filters.**
**Which filter types should you implement? To answer, drag the appropriate filter types to the correct subscriptions. Each filter type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

NOTE: Each correct selection is worth one point.

**Select and Place:**
![](https://www.examtopics.com/assets/media/exam-media/04273/0023800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0023900001.png)
:::

## Question #102
**Your company has several websites that use a company logo image. You use Azure Content Delivery Network (CDN) to store the static image.**

**You need to determine the correct process of how the CDN and the Point of Presence (POP) server will distribute the image and list the items in the correct order.**

**In which order do the actions occur? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024100001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024100002.jpg)
:::

## Question #103

**You are developing an Azure Cosmos DB solution by using the Azure Cosmos DB SQL API. The data includes millions of documents. Each document may contain hundreds of properties.**

**The properties of the documents do not contain distinct values for partitioning. Azure Cosmos DB must scale individual containers in the database to meet the performance needs of the application by spreading the workload evenly across all partitions over time.**

**You need to select a partition key.**

**Which two partition keys can you use? Each correct answer presents a complete solution.**

**NOTE: Each correct selection is worth one point.**

1. A. a single property value that does not appear frequently in the documents
2. B. a value containing the collection name
3. C. a single property value that appears frequently in the documents
4. D. a concatenation of multiple property values with a random suffix appended
5. E. a hash suffix appended to a property value

:::tip Answer
D & E
:::

## Question #104
**You are developing an Azure-hosted e-commerce web application. The application will use Azure Cosmos DB to store sales orders. You are using the latest SDK to manage the sales orders in the database.**

**You create a new Azure Cosmos DB instance. You include a valid endpoint and valid authorization key to an appSettings.json file in the code project.**

**You are evaluating the following application code: (Line number are included for reference only.)**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024400001.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

Hot Area:
![](https://www.examtopics.com/assets/media/exam-media/04273/0024500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024500002.jpg)
:::

## Question #105
**You develop an Azure solution that uses Cosmos DB.**

**The current Cosmos DB container must be replicated and must use a partition key that is optimized for queries. You need to implement a change feed processor solution.**

**Which change feed processor components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view the content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024700001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024700002.png)
:::

## Question #106
**You are developing a web application that will use Azure Storage. Older data will be less frequently used than more recent data.**

**You need to configure data storage for the application. You have the following requirements:**
✑ Retain copies of data for five years.
✑ Minimize costs associated with storing data that is over one year old.
✑ Implement Zone Redundant Storage for application data.

**What should you do? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024800004.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024900001.png)
:::
## Question #107
**A company develops a series of mobile games. All games use a single leaderboard service.**

**You have the following requirements:**
✑ Code must be scalable and allow for growth.
✑ Each record must consist of a playerId, gameId, score, and time played.
✑ When users reach a new high score, the system will save the new score using the SaveScore function below.

**Each game is assigned an Id based on the series title.**

You plan to store customer information in Azure Cosmos DB. The following data already exists in the database:

![](https://www.examtopics.com/assets/media/exam-media/04273/0025000001.png)

You develop the following code to save scores in the data store. (Line numbers are included for reference only.)

![](https://www.examtopics.com/assets/media/exam-media/04273/0025000002.png)

You develop the following code to query the database. (Line numbers are included for reference only.)

![](https://www.examtopics.com/assets/media/exam-media/04273/0025000003.jpg)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

NOTE: Each correct selection is worth one point.

![](https://www.examtopics.com/assets/media/exam-media/04273/0025100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0025100002.png)
:::

## Question #108

**You develop and deploy a web application to Azure App Service. The application accesses data stored in an Azure Storage account. The account contains several containers with several blobs with large amounts of data. You deploy all Azure resources to a single region.**

**You need to move the Azure Storage account to the new region. You must copy all data to the new region.**

**What should you do first?**

1. A. Export the Azure Storage account Azure Resource Manager template
2. B. Initiate a storage account failover
3. C. Configure object replication for all blobs
4. D. Use the AzCopy command line tool
5. E. Create a new Azure Storage account in the current region
6. F. Create a new subscription in the current region

:::tip Answer
A
:::

## Question #109
**You are developing an application to collect the following telemetry data for delivery drivers: first name, last name, package count, item id, and current location coordinates. The app will store the data in Azure Cosmos DB.**

**You need to configure Azure Cosmos DB to query the data.**

**Which values should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04273/0025400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0025500001.png)
:::

## Question #110

**You are implementing an Azure solution that uses Azure Cosmos DB and the latest Azure Cosmos DB SDK. You add a change feed processor to a new container instance.**

**You attempt to read a batch of 100 documents. The process fails when reading one of the documents. The solution must monitor the progress of the change feed processor instance on the new container as the change feed is read. You must prevent the change feed processor from retrying the entire batch when one document cannot be read.**

**You need to implement the change feed processor to read the documents.**

**Which features should you use? To answer, drag the appropriate features to the cored requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each cored selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0025600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0025700001.jpg)
:::

## Question #111
**You have an Azure subscription named Subscription1 that contains the storage accounts shown in the following table:**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014000001.png)

**You plan to use the Azure Import/Export service to export data from Subscription1.**
**You need to identify which storage account can be used to export the data.**
**What should you identify?**

1. A. storage1
2. B. storage2
3. C. storage3
4. D. storage4

:::tip Answer
D
:::

## Question #112

**You have Azure Storage accounts as shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014100001.jpg)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.**

**NOTE: Each correct selection is worth one point.**

Hot Area:
![](https://www.examtopics.com/assets/media/exam-media/04223/0014200001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0014200002.jpg)
:::

## Question #113
**You have Azure subscription that includes data in following locations:**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014300004.png)

**You plan to export data by using Azure import/export job named Export1.**
**You need to identify the data that can be exported by using Export1.**
**Which data should you identify?**

1. A. DB1
2. B. container1
3. C. share1
4. D. Table1

:::tip Answer
B
:::

## Question #114

**You have an Azure Storage account named storage1.**
**You have an Azure App Service app named App1 and an app named App2 that runs in an Azure container instance. Each app uses a managed identity.**
**You need to ensure that App1 and App2 can read blobs from storage1. The solution must meet the following requirements:**
✑ Minimize the number of secrets used.
✑ Ensure that App2 can only read from storage1 for the next 30 days.
**What should you configure in storage1 for each app? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0014500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0014600001.jpg)
:::

## Question #115

**You need to create an Azure Storage account that meets the following requirements:**
✑ Minimizes costs
✑ Supports hot, cool, and archive blob tiers
✑ Provides fault tolerance if a disaster affects the Azure region where the account resides

**How should you complete the command? To answer, select the appropriate options in the answer area.**

NOTE: Each correct selection is worth one point.
Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0014700004.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0014800001.jpg)
:::

## Question #116

**You have an Azure subscription that contains the resources in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014900001.png)

**Store1 contains a file share named data. Data contains 5,000 files.**
**You need to synchronize the files in the file share named data to an on-premises server named Server1.**

**Which three actions should you perform? Each correct answer presents part of the solution.**

NOTE: Each correct selection is worth one point.

1. A. Create a container instance
2. B. Register Server1
3. C. Install the Azure File Sync agent on Server1
4. D. Download an automation script
5. E. Create a sync group

:::tip Answer
BCE
:::

## Question #117

**You have an Azure subscription that contains the resources shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04223/0015000001.png)

**The status of VM1 is Running.**
**You assign an Azure policy as shown in the exhibit. (Click the Exhibit tab.)**

![](https://www.examtopics.com/assets/media/exam-media/04223/0015100001.jpg)

**You assign the policy by using the following parameters:**
**Microsoft.ClassicNetwork/virtualNetworks**
**Microsoft.Network/virtualNetworks**
**Microsoft.Compute/virtualMachines**

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

**NOTE: Each correct selection is worth one point.**
Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015200002.png)
:::

## Question #118

**You have an Azure subscription that contains a storage account.**
**You have an on-premises server named Server1 that runs Windows Server 2016. Server1 has 2 TB of data.**
**You need to transfer the data to the storage account by using the Azure Import/Export service.**

**In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.**

**NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.**

Select and Place:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015300001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015400001.jpg)
:::

## Question #119
You have Azure subscription that includes following Azure file shares:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015500001.png)

You have the following on-premises servers:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015500002.png)

**You create a Storage Sync Service named Sync1 and an Azure File Sync group named Group1. Group1 uses share1 as a cloud endpoint.**
**You register Server1 and Server2 in Sync1. You add D:\Folder1 on Server1 as a server endpoint of Group1.**
**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

NOTE: Each correct selection is worth one point.
Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015600002.jpg)
:::

## Question #120

**You have an Azure subscription named Subscription1.**
**You create an Azure Storage account named contosostorage, and then you create a file share named data.**

**Which UNC path should you include in a script that references files from the data file share? To answer, drag the appropriate values to the correct targets.**
**Each value may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.**

NOTE: Each correct selection is worth one point.
Select and Place:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015700001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015800001.jpg)
:::











