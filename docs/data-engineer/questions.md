---
sidebar_position: 2
---

# Question Bank

**Use search bar for quick access to Q & A.**

## Question #1
**You have a table in an Azure Synapse Analytics dedicated SQL pool. The table was created by using the following Transact-SQL statement.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001600001.png)

**You need to alter the table to meet the following requirements:  
✑ Ensure that users can identify the current manager of employees.  
✑ Support creating an employee reporting hierarchy for your entire company.  
✑ Provide fast lookup of the managers' attributes such as name and job title.  
Which column should you add to the table?**

1. A. [ManagerEmployeeID] [smallint] NULL
2. B. [ManagerEmployeeKey] [smallint] NULL
3. C. [ManagerEmployeeKey] [int] NULL
4. D. [ManagerName] [varchar](200) NULL

:::tip Answer
C
:::

## Question #2
**You have an Azure Synapse workspace named MyWorkspace that contains an Apache Spark database named mytestdb.
You run the following command in an Azure Synapse Analytics Spark pool in MyWorkspace.  
CREATE TABLE mytestdb.myParquetTable(
EmployeeID int,
EmployeeName string,
EmployeeStartDate date)  
USING Parquet -   
You then use Spark to insert a row into mytestdb.myParquetTable. The row contains the following data.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001700001.png)

**One minute later, you execute the following query from a serverless SQL pool in MyWorkspace.   
SELECT EmployeeID -   
FROM mytestdb.dbo.myParquetTable  
WHERE EmployeeName = 'Alice';  
What will be returned by the query?**  
1. A. 24  
2. B. an error  
3. C. a null value

:::tip Answer
A
:::

## Question #3
**DRAG DROP -  
You have a table named SalesFact in an enterprise data warehouse in Azure Synapse Analytics. SalesFact contains sales data from the past 36 months and has the following characteristics:  
✑ Is partitioned by month  
✑ Contains one billion rows   
✑ Has clustered columnstore index  
At the beginning of each month, you need to remove data from SalesFact that is older than 36 months as quickly as possible.  
Which three actions should you perform in sequence in a stored procedure? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0001900002.png)
:::

## Question #4
**You have files and folders in Azure Data Lake Storage Gen2 for an Azure Synapse workspace as shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002000001.png)

**You create an external table named ExtTable that has LOCATION='/topfolder/'.  
When you query ExtTable by using an Azure Synapse Analytics serverless SQL pool, which files are returned?**

1. A. File2.csv and File3.csv only  
2. B. File1.csv and File4.csv only  
3. C. File1.csv, File2.csv, File3.csv, and File4.csv  
4. D. File1.csv only

:::tip Answer
C
:::

## Question #5
**HOTSPOT -  
You are planning the deployment of Azure Data Lake Storage Gen2.  
You have the following two reports that will access the data lake:  
✑ Report1: Reads three columns from a file that contains 50 columns.  
✑ Report2: Queries a single record based on a timestamp.  
You need to recommend in which format to store the data in the data lake to support the reports. The solution must minimize read times.  
What should you recommend for each report? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002200001.png)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0002300001.png)  
:::

## Question #6
**You are designing the folder structure for an Azure Data Lake Storage Gen2 container.
Users will query data by using a variety of services including Azure Databricks and Azure Synapse Analytics serverless SQL pools. The data will be secured by subject area. Most queries will include data from the current year or current month.
Which folder structure should you recommend to support fast queries and simplified folder security?**  
1. A. /{SubjectArea}/{DataSource}/{DD}/{MM}/{YYYY}/{FileData}_{YYYY}_{MM}_{DD}.csv  
2. B. /{DD}/{MM}/{YYYY}/{SubjectArea}/{DataSource}/{FileData}_{YYYY}_{MM}_{DD}.csv  
3. C. /{YYYY}/{MM}/{DD}/{SubjectArea}/{DataSource}/{FileData}_{YYYY}_{MM}_{DD}.csv  
4. D. /{SubjectArea}/{DataSource}/{YYYY}/{MM}/{DD}/{FileData}_{YYYY}_{MM}_{DD}.csv 

:::tip Answer
D
:::

## Question #7
**HOTSPOT -  
You need to output files from Azure Data Factory.  
Which file format should you use for each type of output? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0002600001.png)  
:::

## Question #8
**HOTSPOT -  
You use Azure Data Factory to prepare data to be queried by Azure Synapse Analytics serverless SQL pools.  
Files are initially ingested into an Azure Data Lake Storage Gen2 account as 10 small JSON files. Each file contains the same data attributes and data from a subsidiary of your company.  
You need to move the files to a different folder and transform the data to meet the following requirements:  
✑ Provide the fastest possible query times.  
✑ Automatically infer the schema from the underlying files.  
How should you configure the Data Factory copy activity? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0002900001.png)  
:::

## Question #9
**HOTSPOT -  
You have a data model that you plan to implement in a data warehouse in Azure Synapse Analytics as shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0003000001.png)

**All the dimension tables will be less than 2 GB after compression, and the fact table will be approximately 6 TB. The dimension tables will be relatively static with very few data inserts and updates.  
Which type of table should you use for each table? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0003100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0003300001.png)  
:::

## Question #10
**HOTSPOT -
You have an Azure Data Lake Storage Gen2 container.  
Data is ingested into the container, and then transformed by a data integration application. The data is NOT modified after that. Users can read files in the container but cannot modify the files.  
You need to design a data archiving solution that meets the following requirements:  
✑ New data is accessed frequently and must be available as quickly as possible.  
✑ Data that is older than five years is accessed infrequently but must be available within one second when requested.  
✑ Data that is older than seven years is NOT accessed. After seven years, the data must be persisted at the lowest cost possible.  
✑ Costs must be minimized while maintaining the required availability.  
How should you manage the data? To answer, select the appropriate options in the answer area.   
NOTE: Each correct selection is worth one point  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0003500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0003600001.png)
:::

## Question #11
**DRAG DROP -
You need to create a partitioned table in an Azure Synapse Analytics dedicated SQL pool.  
How should you complete the Transact-SQL statement? To answer, drag the appropriate values to the correct targets.   Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0003800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0003800002.png)
:::

## Question #12
**You need to design an Azure Synapse Analytics dedicated SQL pool that meets the following requirements:   
✑ Can return an employee record from a given point in time.  
✑ Maintains the latest employee information.  
✑ Minimizes query complexity.  
How should you model the employee data?**

1. A. as a temporal table  
2. B. as a SQL graph table  
3. C. as a degenerate dimension table  
4. D. as a Type 2 slowly changing dimension (SCD) table

:::tip Answer
D
:::

## Question #13
**You have an enterprise-wide Azure Data Lake Storage Gen2 account. The data lake is accessible only through an Azure virtual network named VNET1.  
You are building a SQL pool in Azure Synapse that will use data from the data lake.  
Your company has a sales team. All the members of the sales team are in an Azure Active Directory group named Sales.  POSIX controls are used to assign the Sales group access to the files in the data lake.   
You plan to load data to the SQL pool every hour.  
You need to ensure that the SQL pool can load the sales data from the data lake.  
Which three actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each area selection is worth one point.**  

1. A. Add the managed identity to the Sales group.
2. B. Use the managed identity as the credentials for the data load process.
3. C. Create a shared access signature (SAS).
4. D. Add your Azure Active Directory (Azure AD) account to the Sales group.
5. E. Use the shared access signature (SAS) as the credentials for the data load process.
6. F. Create a managed identity.

:::tip Answer
ABF 
:::

## Question #14
**HOTSPOT -
You have an Azure Synapse Analytics dedicated SQL pool that contains the users shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0004000001.png)

**User1 executes a query on the database, and the query returns the results shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0004100001.jpg)

**User1 is the only user who has access to the unmasked data.
Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0004200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0004300001.png)
:::

## Question #15
**You have an enterprise data warehouse in Azure Synapse Analytics.
Using PolyBase, you create an external table named [Ext].[Items] to query Parquet files stored in Azure Data Lake Storage Gen2 without importing the data to the data warehouse.
The external table has three columns.
You discover that the Parquet files have a fourth column named ItemID.
Which command should you run to add the ItemID column to the external table?**

1. A  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004400001.png)

2. B ![](https://www.examtopics.com/assets/media/exam-media/04259/0004400002.png)

3. C  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004400003.png)

4. D  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004500001.png)


:::tip Answer
C
:::

## Question #16
**HOTSPOT -
You have two Azure Storage accounts named Storage1 and Storage2. Each account holds one container and has the hierarchical namespace enabled. The system has files that contain data stored in the Apache Parquet format.  
You need to copy folders and files from Storage1 to Storage2 by using a Data Factory copy activity. The solution must meet the following requirements:  
✑ No transformations must be performed.  
✑ The original folder structure must be retained.  
✑ Minimize time required to perform the copy activity.  
How should you configure the copy activity? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0004600001.jpg)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004700001.jpg)  
:::

## Question #17
**You have an Azure Data Lake Storage Gen2 container that contains 100 TB of data.  
You need to ensure that the data in the container is available for read workloads in a secondary region if an outage occurs in the primary region. The solution must minimize costs.  
Which type of data redundancy should you use?**  

1. A. geo-redundant storage (GRS)  
2. B. read-access geo-redundant storage (RA-GRS)  
3. C. zone-redundant storage (ZRS)  
4. D. locally-redundant storage (LRS)

:::tip Answer
B
:::

## Question #18
**You plan to implement an Azure Data Lake Gen 2 storage account.
You need to ensure that the data lake will remain available if a data center fails in the primary Azure region. The solution must minimize costs.
Which type of replication should you use for the storage account?**

1. A. geo-redundant storage (GRS)
2. B. geo-zone-redundant storage (GZRS)
3. C. locally-redundant storage (LRS)
4. D. zone-redundant storage (ZRS)

:::tip Answer
D
:::

## Question #19
**HOTSPOT -  
You have a SQL pool in Azure Synapse.  
You plan to load data from Azure Blob storage to a staging table. Approximately 1 million rows of data will be loaded daily. The table will be truncated before each daily load.  
You need to create the staging table. The solution must minimize how long it takes to load the data to the staging table.  
How should you configure the table? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0005000001.jpg)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0005100001.jpg)  
:::    

## Question #20
**You are designing a fact table named FactPurchase in an Azure Synapse Analytics dedicated SQL pool. The table contains purchases from suppliers for a retail store. FactPurchase will contain the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0005200001.png)

**FactPurchase will have 1 million rows of data added daily and will contain three years of data.  
Transact-SQL queries similar to the following query will be executed daily.  
SELECT -  
SupplierKey, StockItemKey, IsOrderFinalized, COUNT(*)  
FROM FactPurchase -  
WHERE DateKey >= 20210101 -  
AND DateKey <= 20210131 -  
GROUP By SupplierKey, StockItemKey, IsOrderFinalized  
Which table distribution will minimize query times?**

1. A. replicated
2. B. hash-distributed on PurchaseKey
3. C. round-robin
4. D. hash-distributed on IsOrderFinalized

:::tip Answer
B
:::

## Question #21
**HOTSPOT -  
From a website analytics system, you receive data extracts about user interactions such as downloads, link clicks, form submissions, and video plays.  
The data contains the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0005400001.png)

**You need to design a star schema to support analytical queries of the data. The star schema will contain four tables including a date dimension.  
To which table should you add each column? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0005500001.png)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0005600001.png)  
:::

## Question #22
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Storage account that contains 100 GB of files. The files contain rows of text and numerical values. 75% of the rows contain description data that has an average length of 1.1 MB.  
You plan to copy the data from the storage account to an enterprise data warehouse in Azure Synapse Analytics.  
You need to prepare the files to ensure that the data copies quickly.  
Solution: You convert the files to compressed delimited text files.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
A
:::

## Question #23
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Storage account that contains 100 GB of files. The files contain rows of text and numerical values. 75% of the rows contain description data that has an average length of 1.1 MB.  
You plan to copy the data from the storage account to an enterprise data warehouse in Azure Synapse Analytics.  
You need to prepare the files to ensure that the data copies quickly.  
Solution: You copy the files to a table that has a columnstore index.  
Does this meet the goal?**

1. A. Yes
2. B. No Most Voted

:::tip Answer
B
:::

## Question #24
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Storage account that contains 100 GB of files. The files contain rows of text and numerical values. 75% of the rows contain description data that has an average length of 1.1 MB.  
You plan to copy the data from the storage account to an enterprise data warehouse in Azure Synapse Analytics.  
You need to prepare the files to ensure that the data copies quickly.  
Solution: You modify the files to ensure that each row is more than 1 MB.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #25
**You build a data warehouse in an Azure Synapse Analytics dedicated SQL pool.  
Analysts write a complex SELECT query that contains multiple JOIN and CASE statements to transform data for use in inventory reports. The inventory reports will use the data and additional WHERE parameters depending on the report. The reports will be produced once daily.  
You need to implement a solution to make the dataset available for the reports. The solution must minimize query times.  
What should you implement?**

1. A. an ordered clustered columnstore index
2. B. a materialized view
3. C. result set caching
4. D. a replicated table

:::tip Answer
B
:::

## Question #26
**You have an Azure Synapse Analytics workspace named WS1 that contains an Apache Spark pool named Pool1.  
You plan to create a database named DB1 in Pool1.  
You need to ensure that when tables are created in DB1, the tables are available automatically as external tables to the built-in serverless SQL pool.  
Which format should you use for the tables in DB1?**

1. A. CSV
2. B. ORC
3. C. JSON
4. D. Parquet

:::tip Answer
D
:::

## Question #27
**You are planning a solution to aggregate streaming data that originates in Apache Kafka and is output to Azure Data Lake Storage Gen2. The developers who will implement the stream processing solution use Java.  
Which service should you recommend using to process the streaming data?**

1. A. Azure Event Hubs
2. B. Azure Data Factory
3. C. Azure Stream Analytics
4. D. Azure Databricks

:::tip Answer
D
:::

## Question #28
**You plan to implement an Azure Data Lake Storage Gen2 container that will contain CSV files. The size of the files will vary based on the number of events that occur per hour.
File sizes range from 4 KB to 5 GB.  
You need to ensure that the files stored in the container are optimized for batch processing.  
What should you do?**

1. A. Convert the files to JSON
2. B. Convert the files to Avro
3. C. Compress the files
4. D. Merge the files

:::tip Answer
B
:::

## Question #29
**HOTSPOT -  
You store files in an Azure Data Lake Storage Gen2 container. The container has the storage policy shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0006500001.png)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0006600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0006700001.jpg)
:::

## Question #30
**You are designing a financial transactions table in an Azure Synapse Analytics dedicated SQL pool. The table will have a clustered columnstore index and will include the following columns:  
✑ TransactionType: 40 million rows per transaction type  
✑ CustomerSegment: 4 million per customer segment  
✑ TransactionMonth: 65 million rows per month  
AccountType: 500 million per account type  
You have the following query requirements:  
✑ Analysts will most commonly analyze transactions for a given month.  
✑ Transactions analysis will typically summarize transactions by transaction type, customer segment, and/or account type
You need to recommend a partition strategy for the table to minimize query times.  
On which column should you recommend partitioning the table?**

1. A. CustomerSegment
2. B. AccountType
3. C. TransactionType
4. D. TransactionMonth

:::tip Answer
D
:::

## Question #31
**HOTSPOT -  
You have an Azure Data Lake Storage Gen2 account named account1 that stores logs as shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0006800003.png)

**You do not expect that the logs will be accessed during the retention periods.  
You need to recommend a solution for account1 that meets the following requirements:  
✑ Automatically deletes the logs at the end of each retention period  
✑ Minimizes storage costs  
What should you include in the recommendation? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0006900003.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0006900004.jpg)
:::

## Question #32
**You plan to ingest streaming social media data by using Azure Stream Analytics. The data will be stored in files in Azure Data Lake Storage, and then consumed by using Azure Databricks and PolyBase in Azure Synapse Analytics.  
You need to recommend a Stream Analytics data output format to ensure that the queries from Databricks and PolyBase against the files encounter the fewest possible errors. The solution must ensure that the files can be queried quickly and that the data type information is retained.  
What should you recommend?**

1. A. JSON
2. B. Parquet
3. C. CSV
4. D. Avro

:::tip Answer
B
:::

## Question #33
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1. Pool1 contains a partitioned fact table named dbo.Sales and a staging table named stg.Sales that has the matching table and partition definitions.  
You need to overwrite the content of the first partition in dbo.Sales with the content of the same partition in stg.Sales. The solution must minimize load times.  
What should you do?**

1. A. Insert the data from stg.Sales into dbo.Sales.
2. B. Switch the first partition from dbo.Sales to stg.Sales.
3. C. Switch the first partition from stg.Sales to dbo.Sales.
4. D. Update dbo.Sales from stg.Sales.

:::tip Answer
B
:::

## Question #34
**You are designing a slowly changing dimension (SCD) for supplier data in an Azure Synapse Analytics dedicated SQL pool.  
You plan to keep a record of changes to the available fields.
The supplier data contains the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007200001.png)

**Which three additional columns should you add to the data to create a Type 2 SCD? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. surrogate primary key
2. B. effective start date
3. C. business key
4. D. last modified date
5. E. effective end date
6. F. foreign key

:::tip Answer
BCE 
:::

## Question #35
**HOTSPOT -  
You have a Microsoft SQL Server database that uses a third normal form schema.  
You plan to migrate the data in the database to a star schema in an Azure Synapse Analytics dedicated SQL pool.  
You need to design the dimension tables. The solution must optimize read operations.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0007400002.jpg)
:::

## Question #36
**HOTSPOT -
You plan to develop a dataset named Purchases by using Azure Databricks. Purchases will contain the following columns:  
✑ ProductID  
✑ ItemPrice  
✑ LineTotal  
✑ Quantity  
✑ StoreID  
✑ Minute  
✑ Month  
✑ Hour **  

**Year -**  

✑ **Day**  

**You need to store the data to support hourly incremental load pipelines that will vary for each Store ID. The solution must minimize storage costs.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007600002.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0007700001.png)
:::

## Question #37
**You are designing a partition strategy for a fact table in an Azure Synapse Analytics dedicated SQL pool. The table has the following specifications:  
✑ Contain sales data for 20,000 products.  
Use hash distribution on a column named ProductID.**

**
✑ Contain 2.4 billion records for the years 2019 and 2020.  
Which number of partition ranges provides optimal compression and performance for the clustered columnstore index?**

1. A. 40
2. B. 240
3. C. 400
4. D. 2,400

:::tip Answer
A
:::

## Question #38
**HOTSPOT -  
You are creating dimensions for a data warehouse in an Azure Synapse Analytics dedicated SQL pool.  
You create a table by using the Transact-SQL statement shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007900001.png)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.   
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0008000002.png)
:::

## Question #39
**You are designing a fact table named FactPurchase in an Azure Synapse Analytics dedicated SQL pool. The table contains purchases from suppliers for a retail store. FactPurchase will contain the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008200001.png)

**FactPurchase will have 1 million rows of data added daily and will contain three years of data.
Transact-SQL queries similar to the following query will be executed daily.  
SELECT -  
SupplierKey, StockItemKey, COUNT(*)  
FROM FactPurchase -  
WHERE DateKey >= 20210101 -  
AND DateKey <= 20210131 -  
GROUP By SupplierKey, StockItemKey  
Which table distribution will minimize query times?**

1. A. replicated
2. B. hash-distributed on PurchaseKey
3. C. round-robin
4. D. hash-distributed on DateKey

:::tip Answer
B
:::

## Question #40
**You are implementing a batch dataset in the Parquet format.
Data files will be produced be using Azure Data Factory and stored in Azure Data Lake Storage Gen2. The files will be consumed by an Azure Synapse Analytics serverless SQL pool.  
You need to minimize storage costs for the solution.  
What should you do?**

1. A. Use Snappy compression for the files.
2. B. Use OPENROWSET to query the Parquet files.
3. C. Create an external table that contains a subset of columns from the Parquet files.
4. D. Store all data as string in the Parquet files.

:::tip Answer
C
:::

## Question #41
**DRAG DROP -  
You need to build a solution to ensure that users can query specific files in an Azure Data Lake Storage Gen2 account from an Azure Synapse Analytics serverless SQL pool.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0008500001.jpg)
:::

## Question #42
**You are designing a data mart for the human resources (HR) department at your company. The data mart will contain employee information and employee transactions.  
From a source system, you have a flat extract that has the following fields  
✑ EmployeeID**

**FirstName -**

✑ **LastName  
✑ Recipient  
✑ GrossAmount  
✑ TransactionID  
✑ GovernmentID  
✑ NetAmountPaid  
✑ TransactionDate**  
**You need to design a star schema data model in an Azure Synapse Analytics dedicated SQL pool for the data mart.
Which two tables should you create? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. a dimension table for Transaction
2. B. a dimension table for EmployeeTransaction
3. C. a dimension table for Employee
4. D. a fact table for Employee
5. E. a fact table for Transaction

:::tip Answer
CE
:::

## Question #43
**You are designing a dimension table for a data warehouse.   The table will track the value of the dimension attributes over time and preserve the history of the data by adding new rows as the data changes.   
Which type of slowly changing dimension (SCD) should you use?**

1. A. Type 0
2. B. Type 1
3. C. Type 2
4. D. Type 3

:::tip Answer
C
:::

## Question #44
**DRAG DROP -  
You have data stored in thousands of CSV files in Azure Data Lake Storage Gen2. Each file has a header row followed by a properly formatted carriage return (/ r) and line feed (/n).
You are implementing a pattern that batch loads the files daily into a dedicated SQL pool in Azure Synapse Analytics by using PolyBase.  
You need to skip the header row when you import the files into the data warehouse. Before building the loading pattern, you need to prepare the required database objects in Azure Synapse Analytics.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: Each correct selection is worth one point  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0008800002.jpg)
:::

## Question #45
**HOTSPOT -  
You are building an Azure Synapse Analytics dedicated SQL pool that will contain a fact table for transactions from the first half of the year 2020.  
You need to ensure that the table meets the following requirements:  
✑ Minimizes the processing time to delete data that is older than 10 years  
✑ Minimizes the I/O for queries that use year-to-date values
How should you complete the Transact-SQL statement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0009100001.jpg)
:::

## Question #46
**You are performing exploratory analysis of the bus fare data in an Azure Data Lake Storage Gen2 account by using an Azure Synapse Analytics serverless SQL pool.  
You execute the Transact-SQL query shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009300001.jpg)

**What do the query results include?**

1. A. Only CSV files in the tripdata_2020 subfolder.
2. B. All files that have file names that beginning with "tripdata_2020".
3. C. All CSV files that have file names that contain "tripdata_2020".
4. D. Only CSV that have file names that beginning with "tripdata_2020".

:::tip Answer
D
:::

## Question #47
**DRAG DROP -  
You use PySpark in Azure Databricks to parse the following JSON input.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009400001.png)

**You need to output the data in the following tabular format.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009400002.png)

**How should you complete the PySpark code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the spit bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0009500002.jpg)
:::

## Question #48
**HOTSPOT -  
You are designing an application that will store petabytes of medical imaging data.  
When the data is first created, the data will be accessed frequently during the first week. After one month, the data must be accessible within 30 seconds, but files will be accessed infrequently. After one year, the data will be accessed infrequently but must be accessible within five minutes.  
You need to select a storage strategy for the data. The solution must minimize costs.  
Which storage tier should you use for each time frame? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009700001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0009800001.png)
:::

## Question #49
**You have an Azure Synapse Analytics Apache Spark pool named Pool1.  
You plan to load JSON files from an Azure Data Lake Storage Gen2 container into the tables in Pool1. The structure and data types vary by file.  
You need to load the files into the tables. The solution must maintain the source data types.  
What should you do?**

1. A. Use a Conditional Split transformation in an Azure Synapse data flow.
2. B. Use a Get Metadata activity in Azure Data Factory.
3. C. Load the data by using the OPENROWSET Transact-SQL command in an Azure Synapse Analytics serverless SQL pool.
4. D. Load the data by using PySpark.

:::tip Answer
C
:::

## Question #50
**You have an Azure Databricks workspace named workspace1 in the Standard pricing tier. Workspace1 contains an all-purpose cluster named cluster1.  
You need to reduce the time it takes for cluster1 to start and scale up. The solution must minimize costs.  
What should you do first?**

1. A. Configure a global init script for workspace1.
2. B. Create a cluster policy in workspace1.
3. C. Upgrade workspace1 to the Premium pricing tier.
4. D. Create a pool in workspace1.

:::tip Answer
D
:::

## Question #51
**HOTSPOT -  
You are building an Azure Stream Analytics job that queries reference data from a product catalog file. The file is updated daily.  
The reference data input details for the file are shown in the Input exhibit. (Click the Input tab.)**

![](https://www.examtopics.com/assets/media/exam-media/04259/0010200001.jpg)

**The storage account container view is shown in the Refdata exhibit. (Click the Refdata tab.)**

![](https://www.examtopics.com/assets/media/exam-media/04259/0010300001.png)

**You need to configure the Stream Analytics job to pick up the new reference data.  
What should you configure? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0010400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0010500001.jpg)
:::

## Question #52
**HOTSPOT -  
You have the following Azure Stream Analytics query.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0010700001.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0010800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0010800002.jpg)
:::

## Question #53
**HOTSPOT -  
You are building a database in an Azure Synapse Analytics serverless SQL pool.  
You have data stored in Parquet files in an Azure Data Lake Storege Gen2 container.  
Records are structured as shown in the following sample.  
{  
"id": 123,  
"address_housenumber": "19c",  
"address_line": "Memory Lane",  
"applicant1_name": "Jane",  
"applicant2_name": "Dev"  
}  
The records contain two applicants at most.  
You need to build a table that includes only the address fields.  
How should you complete the Transact-SQL statement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0011000001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0011100001.jpg)
:::

## Question #54
**HOTSPOT -  
You have an Azure Synapse Analytics dedicated SQL pool named Pool1 and an Azure Data Lake Storage Gen2 account named Account1.  
You plan to access the files in Account1 by using an external table.  
You need to create a data source in Pool1 that you can reference when you create the external table.  
How should you complete the Transact-SQL statement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0011200001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0011300001.jpg)
:::

## Question #55
**You have an Azure subscription that contains an Azure Blob Storage account named storage1 and an Azure Synapse Analytics dedicated SQL pool named
Pool1.  
You need to store data in storage1. The data will be read by Pool1. The solution must meet the following requirements:  
Enable Pool1 to skip columns and rows that are unnecessary in a query.  
✑ Automatically create column statistics.  
✑ Minimize the size of files.  
Which type of file should you use?**

1. A. JSON
2. B. Parquet
3. C. Avro
4. D. CSV

:::tip Answer
B
:::

## Question #56
**DRAG DROP -  
You plan to create a table in an Azure Synapse Analytics dedicated SQL pool.  
Data in the table will be retained for five years. Once a year, data that is older than five years will be deleted.  
You need to ensure that the data is distributed evenly across partitions. The solution must minimize the amount of time required to delete old data.  
How should you complete the Transact-SQL statement? To answer, drag the appropriate values to the correct targets.   Each value may be used once, more than once, or not at all.   You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0011500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0011600001.jpg)
:::

## Question #57
**HOTSPOT -  
You have an Azure Data Lake Storage Gen2 service.  
You need to design a data archiving solution that meets the following requirements:  
✑ Data that is older than five years is accessed infrequently but must be available within one second when requested.  
✑ Data that is older than seven years is NOT accessed.  
✑ Costs must be minimized while maintaining the required availability.  
How should you manage the data? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0011800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0011900001.jpg)
:::

## Question #58
**HOTSPOT -  
You plan to create an Azure Data Lake Storage Gen2 account.
You need to recommend a storage solution that meets the following requirements:  
✑ Provides the highest degree of data resiliency  
✑ Ensures that content remains available for writes if a primary data center fails  
What should you include in the recommendation? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0012100003.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0012200001.jpg)
:::

## Question #59
**You need to implement a Type 3 slowly changing dimension (SCD) for product category data in an Azure Synapse Analytics dedicated SQL pool.  
You have a table that was created by using the following Transact-SQL statement.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0012300001.png)

**Which two columns should you add to the table? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A  
![](https://www.examtopics.com/assets/media/exam-media/04259/0012300002.png)

2. B  
![](https://www.examtopics.com/assets/media/exam-media/04259/0012300003.png)

3. C  
![](https://www.examtopics.com/assets/media/exam-media/04259/0012300004.png)

4. D  
![](https://www.examtopics.com/assets/media/exam-media/04259/0012300005.png)

5. E
![](https://www.examtopics.com/assets/media/exam-media/04259/0012300006.png)

:::tip Answer
BE
:::

## Question #60
**DRAG DROP -  
You have an Azure subscription.  
You plan to build a data warehouse in an Azure Synapse Analytics dedicated SQL pool named pool1 that will contain staging tables and a dimensional model.  
Pool1 will contain the following tables.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0012500001.png)

**You need to design the table storage for pool1. The solution must meet the following requirements:  
✑ Maximize the performance of data loading operations to Staging.WebSessions.  
✑ Minimize query times for reporting queries against the dimensional model.  
Which type of table distribution should you use for each table? To answer, drag the appropriate table distribution types to the correct tables. Each table distribution type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0012600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0012600002.jpg)
:::

## Question #61
**HOTSPOT -  
You have an Azure Synapse Analytics dedicated SQL pool.  
You need to create a table named FactInternetSales that will be a large fact table in a dimensional model.   FactInternetSales will contain 100 million rows and two columns named SalesAmount and OrderQuantity. Queries executed on FactInternetSales will aggregate the values in SalesAmount and OrderQuantity from the last year for a specific product.  The solution must minimize the data size and query execution time.   
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0012800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0012900001.jpg)
:::

## Question #62
**You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1. Table1 contains the following:  
✑ One billion rows  
✑ A clustered columnstore index  
✑ A hash-distributed column named Product Key  
✑ A column named Sales Date that is of the date data type and cannot be null  
Thirty million rows will be added to Table1 each month.  
You need to partition Table1 based on the Sales Date column.  The solution must optimize query performance and data loading.
How often should you create a partition?**

1. A. once per month
2. B. once per year
3. C. once per day
4. D. once per week

:::tip Answer
B
:::

## Question #63
**You have an Azure Databricks workspace that contains a Delta Lake dimension table named Table1.  
Table1 is a Type 2 slowly changing dimension (SCD) table.  
You need to apply updates from a source table to Table1.  
Which Apache Spark SQL operation should you use?**

1. A. CREATE
2. B. UPDATE
3. C. ALTER
4. D. MERGE

:::tip Answer
D
:::

## Question #64
**You are designing an Azure Data Lake Storage solution that will transform raw JSON files for use in an analytical workload.  
You need to recommend a format for the transformed files. The solution must meet the following requirements:  
✑ Contain information about the data types of each column in the files.  
✑ Support querying a subset of columns in the files.  
✑ Support read-heavy analytical workloads.  
✑ Minimize the file size.  
What should you recommend?**

1. A. JSON
2. B. CSV
3. C. Apache Avro
4. D. Apache Parquet

:::tip Answer
D
:::

## Question #65
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Storage account that contains 100 GB of files. The files contain rows of text and numerical values. 75% of the rows contain description data that has an average length of 1.1 MB.  
You plan to copy the data from the storage account to an enterprise data warehouse in Azure Synapse Analytics.  
You need to prepare the files to ensure that the data copies quickly.  
Solution: You modify the files to ensure that each row is less than 1 MB.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
A
:::

## Question #66
**You plan to create a dimension table in Azure Synapse Analytics that will be less than 1 GB.  
You need to create the table to meet the following requirements:  
✑ Provide the fastest query time.  
✑ Minimize data movement during queries.  
Which type of table should you use?** 

1. A. replicated
2. B. hash distributed
3. C. heap
4. D. round-robin

:::tip Answer
A
:::

## Question #67
**You are designing a dimension table in an Azure Synapse Analytics dedicated SQL pool.   
You need to create a surrogate key for the table. The solution must provide the fastest query performance.  
What should you use for the surrogate key?**

1. A. a GUID column
2. B. a sequence object
3. C. an IDENTITY column

:::tip Answer
C
:::

## Question #68
**HOTSPOT -  
You have an Azure Data Lake Storage Gen2 account that contains a container named container1. You have an Azure Synapse Analytics serverless SQL pool that contains a native external table named dbo.Table1. The source data for dbo.Table1 is stored in container1. The folder structure of container1 is shown in the following exhibit.**

![](https://img.examtopics.com/dp-203/image262.png)

**The external data source is defined by using the following statement.**

![](https://img.examtopics.com/dp-203/image263.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/dp-203/image264.png)

:::tip Answer
![](https://img.examtopics.com/dp-203/image265.png)
:::

## Question #69
**You have an Azure Synapse Analytics dedicated SQL pool.  
You need to create a fact table named Table1 that will store sales data from the last three years. The solution must be optimized for the following query operations:  
• Show order counts by week.  
• Calculate sales totals by region.  
• Calculate sales totals by product.  
• Find all the orders from a given month.  
Which data should you use to partition Table1?**

1. A. product
2. B. month
3. C. week
4. D. region

:::tip Answer
B
:::

## Question #70
**You are designing the folder structure for an Azure Data Lake Storage Gen2 account.  
You identify the following usage patterns:  
• Users will query data by using Azure Synapse Analytics serverless SQL pools and Azure Synapse Analytics serverless Apache Spark pools.  
• Most queries will include a filter on the current year or week.  
• Data will be secured by data source.**

**You need to recommend a folder structure that meets the following requirements:  
• Supports the usage patterns  
• Simplifies folder security  
• Minimizes query times**

**Which folder structure should you recommend?**

1. A. \DataSource\SubjectArea\YYYY\WW\FileData_YYYY_MM_DD.parquet
2. B. \DataSource\SubjectArea\YYYY-WW\FileData_YYYY_MM_DD.parquet
3. C. DataSource\SubjectArea\WW\YYYY\FileData_YYYY_MM_DD.parquet
4. D. \YYYY\WW\DataSource\SubjectArea\FileData_YYYY_MM_DD.parquet
5. E. WW\YYYY\SubjectArea\DataSource\FileData_YYYY_MM_DD.parquet

:::tip Answer
A
:::

## Question #71
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1. Pool1 contains a table named table1.**

**You load 5 TB of data into table1.**

**You need to ensure that columnstore compression is maximized for table1.**

**Which statement should you execute?**

1. A. DBCC INDEXDEFRAG (pool1, table1)
2. B. DBCC DBREINDEX (table1)
3. C. ALTER INDEX ALL on table1 REORGANIZE
4. D. ALTER INDEX ALL on table1 REBUILD

:::tip Answer
D
:::

## Question #72
**HOTSPOT -  
You plan to create a real-time monitoring app that alerts users when a device travels more than 200 meters away from a designated location.  
You need to design an Azure Stream Analytics job to process the data for the planned app. The solution must minimize the amount of code developed and the number of technologies used.
What should you include in the Stream Analytics job? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0014700001.jpg)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0014800001.jpg)  
:::

## Question #73
**A company has a real-time data analysis solution that is hosted on Microsoft Azure. The solution uses Azure Event Hub to ingest data and an Azure Stream  
Analytics cloud job to analyze the data. The cloud job is configured to use 120 Streaming Units (SU).  
You need to optimize performance for the Azure Stream Analytics job.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Implement event ordering.
2. B. Implement Azure Stream Analytics user-defined functions (UDF).
3. C. Implement query parallelization by partitioning the data output.
4. D. Scale the SU count for the job up.
5. E. Scale the SU count for the job down.
6. F. Implement query parallelization by partitioning the data input.

:::tip Answer
DF 
:::

## Question #74
**You need to trigger an Azure Data Factory pipeline when a file arrives in an Azure Data Lake Storage Gen2 container.  
Which resource provider should you enable?**

1. A. Microsoft.Sql
2. B. Microsoft.Automation
3. C. Microsoft.EventGrid
4. D. Microsoft.EventHub

:::tip Answer
C
:::

## Question #75
**You plan to perform batch processing in Azure Databricks once daily.  
Which type of Databricks cluster should you use?**

1. A. High Concurrency
2. B. automated
3. C. interactive

:::tip Answer
B
:::

## Question #76 
**HOTSPOT -  
You are processing streaming data from vehicles that pass through a toll booth.  
You need to use Azure Stream Analytics to return the license plate, vehicle make, and hour the last vehicle passed during each 10-minute window.  
How should you complete the query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0015200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0015300001.png)
:::

## Question #77
**You have an Azure Data Factory instance that contains two pipelines named Pipeline1 and Pipeline2.  
Pipeline1 has the activities shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0015500001.jpg)

**Pipeline2 has the activities shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0015500002.jpg)

**You execute Pipeline2, and Stored procedure1 in Pipeline1 fails.  
What is the status of the pipeline runs?**

1. A. Pipeline1 and Pipeline2 succeeded.
2. B. Pipeline1 and Pipeline2 failed.
3. C. Pipeline1 succeeded and Pipeline2 failed.
4. D. Pipeline1 failed and Pipeline2 succeeded.

:::tip Answer
A
:::

## Question #78
**HOTSPOT -  
A company plans to use Platform-as-a-Service (PaaS) to create the new data pipeline process. The process must meet the following requirements:  
Ingest:  
✑ Access multiple data sources.  
✑ Provide the ability to orchestrate workflow.  
✑ Provide the capability to run SQL Server Integration Services packages.  
Store:  
✑ Optimize storage for big data workloads.  
✑ Provide encryption of data at rest.  
✑ Operate with no size limits.  
Prepare and Train:  
✑ Provide a fully-managed and interactive workspace for exploration and visualization.  
✑ Provide the ability to program in R, SQL, Python, Scala, and Java.  
Provide seamless user authentication with Azure Active Directory.**

**Model & Serve:  
✑ Implement native columnar storage.  
✑ Support for the SQL language  
✑ Provide support for structured streaming.  
You need to build the data integration pipeline.  
Which technologies should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0015800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0015900001.jpg)
:::

## Question #79
**DRAG DROP -  
You have the following table named Employees.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0016100001.png)

**You need to calculate the employee_type value based on the hire_date value.  
How should you complete the Transact-SQL statement? To answer, drag the appropriate values to the correct targets.   Each value may be used once, more than once, or not at all.   You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0016100002.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0016200001.png)
:::

## Question #80
**DRAG DROP -  
You have an Azure Synapse Analytics workspace named WS1.  
You have an Azure Data Lake Storage Gen2 container that contains JSON-formatted files in the following format.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0016400001.png)

**You need to use the serverless SQL pool in WS1 to read the files.  
How should you complete the Transact-SQL statement? To answer, drag the appropriate values to the correct targets.   Each value may be used once, more than once, or not at all.   You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0016500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0016600001.png)
:::

## Question #81
**DRAG DROP -  
You have an Apache Spark DataFrame named temperatures. A sample of the data is shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0016700001.png)

**You need to produce the following table by using a Spark SQL query.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0016800001.png)

**How should you complete the query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all.  
You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0016800002.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0016900001.jpg)
:::

## Question #82
**You have an Azure Data Factory that contains 10 pipelines.
You need to label each pipeline with its main purpose of either ingest, transform, or load. The labels must be available for grouping and filtering when using the monitoring experience in Data Factory.  
What should you add to each pipeline?**

1. A. a resource tag
2. B. a correlation ID
3. C. a run group ID
4. D. an annotation

:::tip Answer
D
:::

## Question #83
**HOTSPOT -  
The following code segment is used to create an Azure Databricks cluster.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0017100001.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0017200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0017200002.png)
:::

## Question #84
**You are designing a statistical analysis solution that will use custom proprietary Python functions on near real-time data from Azure Event Hubs.  
You need to recommend which Azure service to use to perform the statistical analysis. The solution must minimize latency.  
What should you recommend?**

1. A. Azure Synapse Analytics
2. B. Azure Databricks
3. C. Azure Stream Analytics
4. D. Azure SQL Database

:::tip Answer
C
:::

## Question #85
**HOTSPOT -  
You have an enterprise data warehouse in Azure Synapse Analytics that contains a table named FactOnlineSales. The table contains data from the start of 2009 to the end of 2012.  
You need to improve the performance of queries against FactOnlineSales by using table partitions. The solution must meet the following requirements:  
✑ Create four partitions based on the order date.  
✑ Ensure that each partition contains all the orders placed during a given calendar year.  
How should you complete the T-SQL command? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0017500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0017600001.jpg)
:::

## Question #86
**You need to implement a Type 3 slowly changing dimension (SCD) for product category data in an Azure Synapse Analytics dedicated SQL pool.  
You have a table that was created by using the following Transact-SQL statement.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0017700001.png)

**Which two columns should you add to the table? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. [EffectiveStartDate] [datetime] NOT NULL,
2. B. [CurrentProductCategory] [nvarchar] (100) NOT NULL,
3. C. [EffectiveEndDate] [datetime] NULL,
4. D. [ProductCategory] [nvarchar] (100) NOT NULL,
5. E. [OriginalProductCategory] [nvarchar] (100) NOT NULL,

:::tip Answer
BE 
:::

## Question #87
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are designing an Azure Stream Analytics solution that will analyze Twitter data.  
You need to count the tweets in each 10-second window. The solution must ensure that each tweet is counted only once.  
Solution: You use a hopping window that uses a hop size of 10 seconds and a window size of 10 seconds.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #88
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are designing an Azure Stream Analytics solution that will analyze Twitter data.  
You need to count the tweets in each 10-second window. The solution must ensure that each tweet is counted only once.  
Solution: You use a hopping window that uses a hop size of 5 seconds and a window size 10 seconds.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #89
**HOTSPOT -  
You are building an Azure Stream Analytics job to identify how much time a user spends interacting with a feature on a webpage.  
The job receives events based on user actions on the webpage. Each row of data represents an event. Each event has a type of either 'start' or 'end'.  
You need to calculate the duration between start and end events.  
How should you complete the query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0018000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0018100001.png)
:::

## Question #90
**You are creating an Azure Data Factory data flow that will ingest data from a CSV file, cast columns to specified types of data, and insert the data into a table in an
Azure Synapse Analytic dedicated SQL pool. The CSV file contains three columns named username, comment, and date.  
The data flow already contains the following:  
✑ A source transformation.  
✑ A Derived Column transformation to set the appropriate types of data.  
✑ A sink transformation to land the data in the pool.  
You need to ensure that the data flow meets the following requirements:  
✑ All valid rows must be written to the destination table.  
✑ Truncation errors in the comment column must be avoided proactively.  
✑ Any rows containing comment values that will cause truncation errors upon insert must be written to a file in blob storage.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. To the data flow, add a sink transformation to write the rows to a file in blob storage.
2. B. To the data flow, add a Conditional Split transformation to separate the rows that will cause truncation errors.
3. C. To the data flow, add a filter transformation to filter out rows that will cause truncation errors.
4. D. Add a select transformation to select only the rows that will cause truncation errors.

:::tip Answer
AB 
:::

## Question #91
**DRAG DROP -  
You need to create an Azure Data Factory pipeline to process data for the following three departments at your company:    Ecommerce, retail, and wholesale. The solution must ensure that data can also be processed for the entire company.  
How should you complete the Data Factory data flow script? To answer, drag the appropriate values to the correct targets.   Each value may be used once, more than once, or not at all.   You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0018400002.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0018500001.png)
:::

## Question #92
**DRAG DROP -  
You have an Azure Data Lake Storage Gen2 account that contains a JSON file for customers. The file contains two attributes named FirstName and LastName.  
You need to copy the data from the JSON file to an Azure Synapse Analytics table by using Azure Databricks. A new column must be created that concatenates the FirstName and LastName values.  
You create the following components:  
✑ A destination table in Azure Synapse  
✑ An Azure Blob storage container  
✑ A service principal  
Which five actions should you perform in sequence next in is Databricks notebook? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0018600004.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0018700001.png)
:::

## Question #93
**HOTSPOT -  
You build an Azure Data Factory pipeline to move data from an Azure Data Lake Storage Gen2 container to a database in an Azure Synapse Analytics dedicated
SQL pool.  
Data in the container is stored in the following folder structure.  
/in/{YYYY}/{MM}/{DD}/{HH}/{mm}  
The earliest folder is /in/2021/01/01/00/00. The latest folder is /in/2021/01/15/01/45.  
You need to configure a pipeline trigger to meet the following requirements:  
✑ Existing data must be loaded.  
✑ Data must be loaded every 30 minutes.  
✑ Late-arriving data of up to two minutes must be included in the load for the time at which the data should have arrived.  
How should you configure the pipeline trigger? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0018800004.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0018900001.png)
:::

## Question #94
**HOTSPOT -  
You are designing a near real-time dashboard solution that will visualize streaming data from remote sensors that connect to the internet. The streaming data must be aggregated to show the average value of each 10-second interval. The data will be discarded after being displayed in the dashboard.  
The solution will use Azure Stream Analytics and must meet the following requirements:  
✑ Minimize latency from an Azure Event hub to the dashboard.  
✑ Minimize the required storage.  
✑ Minimize development effort.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point  
Hot Area:** 

![](https://www.examtopics.com/assets/media/exam-media/04259/0019000004.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0019100001.png)
:::

## Question #95
**DRAG DROP -  
You have an Azure Stream Analytics job that is a Stream Analytics project solution in Microsoft Visual Studio. The job accepts data generated by IoT devices in the JSON format.  
You need to modify the job to accept data generated by the IoT devices in the Protobuf format.  
Which three actions should you perform from Visual Studio on sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0019200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0019200002.png)
:::

## Question #96
**You have an Azure Storage account and a data warehouse in Azure Synapse Analytics in the UK South region.  
You need to copy blob data from the storage account to the data warehouse by using Azure Data Factory. The solution must meet the following requirements:  
✑ Ensure that the data remains in the UK South region at all times.  
✑ Minimize administrative effort.  
Which type of integration runtime should you use?**

1. A. Azure integration runtime
2. B. Azure-SSIS integration runtime
3. C. Self-hosted integration runtime

:::tip Answer
A
:::

## Question #97
**HOTSPOT -  
You have an Azure SQL database named Database1 and two Azure event hubs named HubA and HubB. The data consumed from each source is shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0019500001.png)

**You need to implement Azure Stream Analytics to calculate the average fare per mile by driver.  
How should you configure the Stream Analytics input for each source? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0019600001.png)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0019700001.png)  
:::

## Question #98
**You have an Azure Stream Analytics job that receives clickstream data from an Azure event hub.  
You need to define a query in the Stream Analytics job. The query must meet the following requirements:  
✑ Count the number of clicks within each 10-second window based on the country of a visitor.  
✑ Ensure that each click is NOT counted more than once.  
How should you define the Query?**

1. A. SELECT Country, Avg(*) AS Average FROM ClickStream TIMESTAMP BY CreatedAt GROUP BY Country, SlidingWindow(second, 10)
2. B. SELECT Country, Count(*) AS Count FROM ClickStream TIMESTAMP BY CreatedAt GROUP BY Country, TumblingWindow(second, 10)
3. C. SELECT Country, Avg(*) AS Average FROM ClickStream TIMESTAMP BY CreatedAt GROUP BY Country, HoppingWindow(second, 10, 2)
4. D. SELECT Country, Count(*) AS Count FROM ClickStream TIMESTAMP BY CreatedAt GROUP BY Country, SessionWindow(second, 5, 10)

:::tip Answer
B
:::

## Question #99
**HOTSPOT -  
You are building an Azure Analytics query that will receive input data from Azure IoT Hub and write the results to Azure Blob storage.  
You need to calculate the difference in the number of readings per sensor per hour.  
How should you complete the query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0019900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0019900002.png)
:::

## Question #100
**You need to schedule an Azure Data Factory pipeline to execute when a new file arrives in an Azure Data Lake Storage Gen2 container.  
Which type of trigger should you use?**

1. A. on-demand
2. B. tumbling window
3. C. schedule
4. D. event

:::tip Answer
D
:::

## Question #101
**You have two Azure Data Factory instances named ADFdev and ADFprod. ADFdev connects to an Azure DevOps Git repository.
You publish changes from the main branch of the Git repository to ADFdev.  
You need to deploy the artifacts from ADFdev to ADFprod.  
What should you do first?**

1. A. From ADFdev, modify the Git configuration.
2. B. From ADFdev, create a linked service.
3. C. From Azure DevOps, create a release pipeline.
4. D. From Azure DevOps, update the main branch.

:::tip Answer
C
:::

## Question #102
**You are developing a solution that will stream to Azure Stream Analytics. The solution will have both streaming data and reference data.  
Which input type should you use for the reference data?**

1. A. Azure Cosmos DB
2. B. Azure Blob storage
3. C. Azure IoT Hub
4. D. Azure Event Hubs

:::tip Answer
B
:::

## Question #103
**You are designing an Azure Stream Analytics job to process incoming events from sensors in retail environments.  
You need to process the events to produce a running average of shopper counts during the previous 15 minutes, calculated at five-minute intervals.  
Which type of window should you use?**

1. A. snapshot
2. B. tumbling
3. C. hopping
4. D. sliding

:::tip Answer
C
:::

## Question #104
**HOTSPOT -  
You are designing a monitoring solution for a fleet of 500 vehicles. Each vehicle has a GPS tracking device that sends data to an Azure event hub once per minute.  
You have a CSV file in an Azure Data Lake Storage Gen2 container. The file maintains the expected geographical area in which each vehicle should be.  
You need to ensure that when a GPS position is outside the expected area, a message is added to another event hub for processing within 30 seconds. The solution must minimize cost.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0020400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0020500001.png)
:::

## Question #105
**You are designing an Azure Databricks table. The table will ingest an average of 20 million streaming events per day.  
You need to persist the events in the table for use in incremental load pipeline jobs in Azure Databricks. The solution must minimize storage costs and incremental load times.  
What should you include in the solution?**

1. A. Partition by DateTime fields.
2. B. Sink to Azure Queue storage.
3. C. Include a watermark column.
4. D. Use a JSON format for physical data storage.

:::tip Answer
B
:::

## Question #106
**HOTSPOT -  
You have a self-hosted integration runtime in Azure Data Factory.  
The current status of the integration runtime has the following configurations:  
✑ Status: Running  
✑ Type: Self-Hosted  
✑ Version: 4.4.7292.1  
✑ Running / Registered Node(s): 1/1  
✑ High Availability Enabled: False  
✑ Linked Count: 0  
✑ Queue Length: 0  
✑ Average Queue Duration. 0.00s  
The integration runtime has the following node details:  
✑ Name: X-M  
✑ Status: Running  
✑ Version: 4.4.7292.1  
✑ Available Memory: 7697MB  
✑ CPU Utilization: 6%  
✑ Network (In/Out): 1.21KBps/0.83KBps  
✑ Concurrent Jobs (Running/Limit): 2/14  
✑ Role: Dispatcher/Worker  
✑ Credential Status: In Sync  
Use the drop-down menus to select the answer choice that completes each statement based on the information presented.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0020800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0020900001.png)
:::

## Question #107
**You have an Azure Databricks workspace named workspace1 in the Standard pricing tier.  
You need to configure workspace1 to support autoscaling all-purpose clusters. The solution must meet the following requirements:  
✑ Automatically scale down workers when the cluster is underutilized for three minutes.  
✑ Minimize the time it takes to scale to the maximum number of workers.  
✑ Minimize costs.  
What should you do first?**

1. A. Enable container services for workspace1.
2. B. Upgrade workspace1 to the Premium pricing tier.
3. C. Set Cluster Mode to High Concurrency.
4. D. Create a cluster policy in workspace1.

:::tip Answer
B
:::

## Question #108
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.  Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are designing an Azure Stream Analytics solution that will analyze Twitter data.  
You need to count the tweets in each 10-second window. The solution must ensure that each tweet is counted only once.  
Solution: You use a tumbling window, and you set the window size to 10 seconds.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
A
:::

## Question #109
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are designing an Azure Stream Analytics solution that will analyze Twitter data.  
You need to count the tweets in each 10-second window. The solution must ensure that each tweet is counted only once.  
Solution: You use a session window that uses a timeout size of 10 seconds.
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #110
**You use Azure Stream Analytics to receive data from Azure Event Hubs and to output the data to an Azure Blob Storage account.  
You need to output the count of records received from the last five minutes every minute.  
Which windowing function should you use?**

1. A. Session
2. B. Tumbling
3. C. Sliding
4. D. Hopping

:::tip Answer
D
:::

## Question #111
**HOTSPOT -  
You configure version control for an Azure Data Factory instance as shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0021500001.jpg)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0021600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0021600002.jpg)
:::

## Question #112
**HOTSPOT -  
You are designing an Azure Stream Analytics solution that receives instant messaging data from an Azure Event Hub.  
You need to ensure that the output from the Stream Analytics job counts the number of messages per time zone every 15 seconds.  
How should you complete the Stream Analytics query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0021700001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0021800001.png)
:::

## Question #113
**HOTSPOT -  
You have an Azure Data Factory instance named ADF1 and two Azure Synapse Analytics workspaces named WS1 and WS2.
ADF1 contains the following pipelines:  
✑ P1: Uses a copy activity to copy data from a nonpartitioned table in a dedicated SQL pool of WS1 to an Azure Data Lake Storage Gen2 account  
✑ P2: Uses a copy activity to copy data from text-delimited files in an Azure Data Lake Storage Gen2 account to a nonpartitioned table in a dedicated SQL pool of WS2   
You need to configure P1 and P2 to maximize parallelism and performance.  
Which dataset settings should you configure for the copy activity if each pipeline? To answer, select the appropriate options in the answer area.   
NOTE: Each correct selection is worth one point.
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0022000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0022100001.png)
:::

## Question #114
**HOTSPOT -  
You have an Azure Storage account that generates 200,000 new files daily. The file names have a format of {YYYY}/{MM}/{DD}/{HH}/{CustomerID}.csv.  
You need to design an Azure Data Factory solution that will load new data from the storage account to an Azure Data Lake once hourly. The solution must minimize load times and costs.
How should you configure the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0022200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0022300001.png)
:::

## Question #115
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You plan to create an Azure Databricks workspace that has a tiered structure. The workspace will contain the following three workloads:  
✑ A workload for data engineers who will use Python and SQL.  
✑ A workload for jobs that will run notebooks that use Python, Scala, and SQL.  
✑ A workload that data scientists will use to perform ad hoc analysis in Scala and R.  
The enterprise architecture team at your company identifies the following standards for Databricks environments:  
✑ The data engineers must share a cluster.  
✑ The job cluster will be managed by using a request process whereby data scientists and data engineers provide packaged notebooks for deployment to the cluster.  
✑ All the data scientists must be assigned their own cluster that terminates automatically after 120 minutes of inactivity. Currently, there are three data scientists.  
You need to create the Databricks clusters for the workloads.  
Solution: You create a Standard cluster for each data scientist, a Standard cluster for the data engineers, and a High Concurrency cluster for the jobs.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #116
**You have the following Azure Data Factory pipelines:  
✑ Ingest Data from System1  
✑ Ingest Data from System2  
✑ Populate Dimensions   
✑ Populate Facts  
Ingest Data from System1 and Ingest Data from System2 have no dependencies. Populate Dimensions must execute after Ingest Data from System1 and Ingest
Data from System2. Populate Facts must execute after Populate Dimensions pipeline. All the pipelines must execute every eight hours.  
What should you do to schedule the pipelines for execution?**

1. A. Add an event trigger to all four pipelines.
2. B. Add a schedule trigger to all four pipelines.
3. C. Create a patient pipeline that contains the four pipelines and use a schedule trigger.
4. D. Create a patient pipeline that contains the four pipelines and use an event trigger.

:::tip Answer
C
:::

## Question #117
**DRAG DROP -  
You are responsible for providing access to an Azure Data Lake Storage Gen2 account.  
Your user account has contributor access to the storage account, and you have the application ID and access key.    
You plan to use PolyBase to load data into an enterprise data warehouse in Azure Synapse Analytics.  
You need to configure PolyBase to connect the data warehouse to storage account.  
Which three components should you create in sequence? To answer, move the appropriate components from the list of components to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0022700001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0022700002.jpg)
:::

## Question #118
**You are monitoring an Azure Stream Analytics job by using metrics in Azure.  
You discover that during the last 12 hours, the average watermark delay is consistently greater than the configured late arrival tolerance.  
What is a possible cause of this behavior?**

1. A. Events whose application timestamp is earlier than their arrival time by more than five minutes arrive as inputs.
2. B. There are errors in the input data.
3. C. The late arrival policy causes events to be dropped.
4. D. The job lacks the resources to process the volume of incoming data.

:::tip Answer
D
:::

## Question #119
**HOTSPOT -  
You are building an Azure Stream Analytics job to retrieve game data.  
You need to ensure that the job returns the highest scoring record for each five-minute time interval of each game.  
How should you complete the Stream Analytics query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0022900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0023000001.jpg)
:::

## Question #120
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Data Lake Storage account that contains a staging zone.  
You need to design a daily process to ingest incremental data from the staging zone, transform the data by executing an R script, and then insert the transformed data into a data warehouse in Azure Synapse Analytics.  
Solution: You use an Azure Data Factory schedule trigger to execute a pipeline that copies the data to a staging table in the data warehouse, and then uses a stored procedure to execute the R script.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
A
:::

## Question #121  
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You plan to create an Azure Databricks workspace that has a tiered structure. The workspace will contain the following three workloads:  
✑ A workload for data engineers who will use Python and SQL.  
✑ A workload for jobs that will run notebooks that use Python, Scala, and SQL.  
✑ A workload that data scientists will use to perform ad hoc analysis in Scala and R.  
The enterprise architecture team at your company identifies the following standards for Databricks environments:  
✑ The data engineers must share a cluster.  
✑ The job cluster will be managed by using a request process whereby data scientists and data engineers provide packaged notebooks for deployment to the cluster.  
✑ All the data scientists must be assigned their own cluster that terminates automatically after 120 minutes of inactivity. Currently, there are three data scientists.  
You need to create the Databricks clusters for the workloads.
Solution: You create a High Concurrency cluster for each data scientist, a High Concurrency cluster for the data engineers, and a Standard cluster for the jobs.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #122
**You are designing an Azure Databricks cluster that runs user-defined local processes.  
You need to recommend a cluster configuration that meets the following requirements:  
✑ Minimize query latency.  
✑ Maximize the number of users that can run queries on the cluster at the same time.  
✑ Reduce overall costs without compromising other requirements.  
Which cluster type should you recommend?**

1. A. Standard with Auto Termination
2. B. High Concurrency with Autoscaling
3. C. High Concurrency with Auto Termination
4. D. Standard with Autoscaling

:::tip Answer
B
:::

## Question #123
**HOTSPOT -  
You are building an Azure Data Factory solution to process data received from Azure Event Hubs, and then ingested into an Azure Data Lake Storage Gen2 container.  
The data will be ingested every five minutes from devices into JSON files. The files have the following naming pattern.
/{deviceType}/in/{YYYY}/{MM}/{DD}/{HH}/{deviceID}_{YYYY}{MM}{DD}HH}{mm}.json  
You need to prepare the data for batch data processing so that there is one dataset per hour per deviceType. The solution must minimize read times.  
How should you configure the sink for the copy activity? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0023500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0023600001.png)
:::

## Question #124
**DRAG DROP -  
You are designing an Azure Data Lake Storage Gen2 structure for telemetry data from 25 million devices distributed across seven key geographical regions. Each minute, the devices will send a JSON payload of metrics to Azure Event Hubs.  
You need to recommend a folder structure for the data. The solution must meet the following requirements:  
✑ Data engineers from each region must be able to build their own pipelines for the data of their respective region only.  
✑ The data must be processed at least once every 15 minutes for inclusion in Azure Synapse Analytics serverless SQL pools.  
How should you recommend completing the structure? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0023700003.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0023800001.jpg)
:::

## Question #125
**HOTSPOT -  
You are implementing an Azure Stream Analytics solution to process event data from devices.  
The devices output events when there is a fault and emit a repeat of the event every five seconds until the fault is resolved. The devices output a heartbeat event every five seconds after a previous event if there are no faults present.  
A sample of the events is shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0023900001.png)

**You need to calculate the uptime between the faults.  
How should you complete the Stream Analytics SQL query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0024000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0024100001.png)
:::

## Question #126
**You are creating a new notebook in Azure Databricks that will support R as the primary language but will also support Scala and SQL.  
Which switch should you use to switch between languages?**

1. A. ```%<language>```
2. B. ```@<Language >```
3. C. ```\\[<language >]```
4. D. ```\\(<language >)```

:::tip Answer
A
:::

## Question #127
**You have an Azure Data Factory pipeline that performs an incremental load of source data to an Azure Data Lake Storage Gen2 account.  
Data to be loaded is identified by a column named LastUpdatedDate in the source table.  
You plan to execute the pipeline every four hours.  
You need to ensure that the pipeline execution meets the following requirements:  
✑ Automatically retries the execution when the pipeline run fails due to concurrency or throttling limits.  
✑ Supports backfilling existing data in the table.  
Which type of trigger should you use?** 

1. A. event
2. B. on-demand
3. C. schedule
4. D. tumbling window

:::tip Answer
D
:::

## Question #128
**You are designing a solution that will copy Parquet files stored in an Azure Blob storage account to an Azure Data Lake Storage Gen2 account.  
The data will be loaded daily to the data lake and will use a folder structure of {Year}/{Month}/{Day}/.  
You need to design a daily Azure Data Factory data load to minimize the data transfer between the two accounts.  
Which two configurations should you include in the design?    Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point**

1. A. Specify a file naming pattern for the destination.
2. B. Delete the files in the destination before loading the data.
3. C. Filter by the last modified date of the source files.
4. D. Delete the source files after they are copied.

:::tip Answer
AC
:::

## Question #129
**You plan to build a structured streaming solution in Azure Databricks. The solution will count new events in five-minute intervals and report only events that arrive during the interval. The output will be sent to a Delta Lake table.  
Which output mode should you use?**

1. A. update
2. B. complete
3. C. append

:::tip Answer
C
:::

## Question #130
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1.  
You have files that are ingested and loaded into an Azure Data Lake Storage Gen2 container named container1.  
You plan to insert data from the files in container1 into Table1 and transform the data. Each row of data in the files will produce one row in the serving layer of
Table1.  
You need to ensure that when the source data files are loaded to container1, the DateTime is stored as an additional column in Table1.  
Solution: In an Azure Synapse Analytics pipeline, you use a data flow that contains a Derived Column transformation.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
A
:::

## Question #131
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.  Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1.  
You have files that are ingested and loaded into an Azure Data Lake Storage Gen2 container named container1.  
You plan to insert data from the files in container1 into Table1 and transform the data. Each row of data in the files will produce one row in the serving layer of
Table1.  
You need to ensure that when the source data files are loaded to container1, the DateTime is stored as an additional column in Table1.  
Solution: You use a dedicated SQL pool to create an external table that has an additional DateTime column.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #132
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.  Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1.  
You have files that are ingested and loaded into an Azure Data Lake Storage Gen2 container named container1.  
You plan to insert data from the files in container1 into Table1 and transform the data. Each row of data in the files will produce one row in the serving layer of
Table1.  
You need to ensure that when the source data files are loaded to container1, the DateTime is stored as an additional column in Table1.  
Solution: You use an Azure Synapse Analytics serverless SQL pool to create an external table that has an additional DateTime column.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #133
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1.   
You have files that are ingested and loaded into an Azure Data Lake Storage Gen2 container named container1.  
You plan to insert data from the files in container1 into Table1 and transform the data. Each row of data in the files will produce one row in the serving layer of
Table1.  
You need to ensure that when the source data files are loaded to container1, the DateTime is stored as an additional column in Table1.  
Solution: In an Azure Synapse Analytics pipeline, you use a Get Metadata activity that retrieves the DateTime of the files.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #134
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Data Lake Storage account that contains a staging zone.  
You need to design a daily process to ingest incremental data from the staging zone, transform the data by executing an R script, and then insert the transformed data into a data warehouse in Azure Synapse Analytics.  
Solution: You use an Azure Data Factory schedule trigger to execute a pipeline that executes an Azure Databricks notebook, and then inserts the data into the data warehouse.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #135
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Data Lake Storage account that contains a staging zone.  
You need to design a daily process to ingest incremental data from the staging zone, transform the data by executing an R script, and then insert the transformed data into a data warehouse in Azure Synapse Analytics.  
Solution: You use an Azure Data Factory schedule trigger to execute a pipeline that executes mapping data flow, and then inserts the data into the data warehouse.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #136
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.  Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Data Lake Storage account that contains a staging zone.  
You need to design a daily process to ingest incremental data from the staging zone, transform the data by executing an R script, and then insert the transformed data into a data warehouse in Azure Synapse Analytics.  
Solution: You schedule an Azure Databricks job that executes an R notebook, and then inserts the data into the data warehouse.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #137
**You plan to create an Azure Data Factory pipeline that will include a mapping data flow.  
You have JSON data containing objects that have nested arrays.
You need to transform the JSON-formatted data into a tabular dataset. The dataset must have one row for each item in the arrays.  
Which transformation method should you use in the mapping data flow?**

1. A. new branch
2. B. unpivot
3. C. alter row
4. D. flatten

:::tip Answer
D
:::

## Question #138
**You use Azure Stream Analytics to receive Twitter data from Azure Event Hubs and to output the data to an Azure Blob storage account.  
You need to output the count of tweets during the last five minutes every five minutes. Each tweet must only be counted once.  
Which windowing function should you use?**

1. A. a five-minute Sliding window
2. B. a five-minute Session window
3. C. a five-minute Hopping window that has a one-minute hop
4. D. a five-minute Tumbling window

:::tip Answer
D
:::

## Question #139
**You are planning a streaming data solution that will use Azure Databricks. The solution will stream sales transaction data from an online store. The solution has the following specifications:  
The output data will contain items purchased, quantity, line total sales amount, and line total tax amount.**

**✑ Line total sales amount and line total tax amount will be aggregated in Databricks.  
✑ Sales transactions will never be updated. Instead, new rows will be added to adjust a sale.  
You need to recommend an output mode for the dataset that will be processed by using Structured Streaming. The solution must minimize duplicate data.  
What should you recommend?**

1. A. Update
2. B. Complete
3. C. Append

:::tip Answer
A
:::

## Question #140
**You have an enterprise data warehouse in Azure Synapse Analytics named DW1 on a server named Server1.  
You need to determine the size of the transaction log file for each distribution of DW1.  
What should you do?**

1. A. On DW1, execute a query against the sys.database_files dynamic management view.
2. B. From Azure Monitor in the Azure portal, execute a query against the logs of DW1.
3. C. Execute a query against the logs of DW1 by using the Get-AzOperationalInsightsSearchResult PowerShell cmdlet.
4. D. On the master database, execute a query against the sys.dm_pdw_nodes_os_performance_counters dynamic management view.

:::tip Answer
A
:::

## Question #141
**You are designing an anomaly detection solution for streaming data from an Azure IoT hub. The solution must meet the following requirements:  
✑ Send the output to Azure Synapse.  
✑ Identify spikes and dips in time series data.  
✑ Minimize development and configuration effort.  
Which should you include in the solution?**

1. A. Azure Databricks
2. B. Azure Stream Analytics
3. C. Azure SQL Database

:::tip Answer
B
:::

## Question #142
**A company uses Azure Stream Analytics to monitor devices.
The company plans to double the number of devices that are monitored.  
You need to monitor a Stream Analytics job to ensure that there are enough processing resources to handle the additional load.  
Which metric should you monitor?**

1. A. Early Input Events
2. B. Late Input Events
3. C. Watermark delay
4. D. Input Deserialization Errors

:::tip Answer
C
:::

## Question #143
**HOTSPOT -  
You are designing an enterprise data warehouse in Azure Synapse Analytics that will store website traffic analytics in a star schema.  
You plan to have a fact table for website visits. The table will be approximately 5 GB.  
You need to recommend which distribution type and index type to use for the table. The solution must provide the fastest query performance.  
What should you recommend? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0025600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0025700001.png)  
:::

## Question #144
**You have an Azure Stream Analytics job.   
You need to ensure that the job has enough streaming units provisioned.  
You configure monitoring of the SU % Utilization metric.  
Which two additional metrics should you monitor? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Backlogged Input Events
2. B. Watermark Delay
3. C. Function Events
4. D. Out of order Events
5. E. Late Input Events

:::tip Answer
AB
:::

## Question #145
**You have an activity in an Azure Data Factory pipeline. The activity calls a stored procedure in a data warehouse in Azure Synapse Analytics and runs daily.  
You need to verify the duration of the activity when it ran last.  
What should you use?**

1. A. activity runs in Azure Monitor
2. B. Activity log in Azure Synapse Analytics
3. C. the sys.dm_pdw_wait_stats data management view in Azure Synapse Analytics
4. D. an Azure Resource Manager template

:::tip Answer
A
:::

## Question #146
**You have an Azure Data Factory pipeline that is triggered hourly.  
The pipeline has had 100% success for the past seven days.
The pipeline execution fails, and two retries that occur 15 minutes apart also fail. The third failure returns the following error.  
ErrorCode=UserErrorFileNotFound,'Type=Microsoft.DataTransfer.Common.Shared.HybridDeliveryException,Message=ADLS Gen2 operation failed for: Operation returned an invalid status code 'NotFound'. Account: 'contosoproduksouth'. Filesystem: wwi. Path: 'BIKES/CARBON/year=2021/month=01/day=10/hour=06'. ErrorCode: 'PathNotFound'. Message: 'The specified path does not exist.'. RequestId: '6d269b78-901f-001b-4924-e7a7bc000000'. TimeStamp: 'Sun, 10 Jan 2021 07:45:05  
What is a possible cause of the error?**

1. A. The parameter used to generate year=2021/month=01/day=10/hour=06 was incorrect.
2. B. From 06:00 to 07:00 on January 10, 2021, there was no data in wwi/BIKES/CARBON.
3. C. From 06:00 to 07:00 on January 10, 2021, the file format of data in wwi/BIKES/CARBON was incorrect.
4. D. The pipeline was triggered too early.

:::tip Answer
A
:::

## Question #147
**You have an Azure Synapse Analytics job that uses Scala.
You need to view the status of the job.  
What should you do?**

1. A. From Synapse Studio, select the workspace. From Monitor, select SQL requests.
2. B. From Azure Monitor, run a Kusto query against the AzureDiagnostics table.
3. C. From Synapse Studio, select the workspace. From Monitor, select Apache Sparks applications.
4. D. From Azure Monitor, run a Kusto query against the SparkLoggingEvent_CL table.

:::tip Answer
C
:::

## Question #148
**DRAG DROP -  
You have an Azure Data Lake Storage Gen2 account that contains a JSON file for customers. The file contains two attributes named FirstName and LastName.  
You need to copy the data from the JSON file to an Azure Synapse Analytics table by using Azure Databricks. A new column must be created that concatenates the FirstName and LastName values.  
You create the following components:  
✑ A destination table in Azure Synapse  
✑ An Azure Blob storage container  
✑ A service principal  
In which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0026400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0026400002.png)
:::

## Question #149
**You have an Azure data factory named ADF1.  
You currently publish all pipeline authoring changes directly to ADF1.  
You need to implement version control for the changes made to pipeline artifacts. The solution must ensure that you can apply version control to the resources currently defined in the UX Authoring canvas for ADF1.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. From the UX Authoring canvas, select Set up code repository.
2. B. Create a Git repository.
3. C. Create a GitHub action.
4. D. Create an Azure Data Factory trigger.
5. E. From the UX Authoring canvas, select Publish.
6. F. From the UX Authoring canvas, run Publish All.

:::tip Answer
BF
:::

## Question #150
**DRAG DROP -  
You have an Azure subscription that contains an Azure Synapse Analytics workspace named workspace1. Workspace1 connects to an Azure DevOps repository named repo1. Repo1 contains a collaboration branch named main and a development branch named branch1. Branch1 contains an Azure Synapse pipeline named pipeline1.  
In workspace1, you complete testing of pipeline1.    
You need to schedule pipeline1 to run daily at 6 AM.  
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0026600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0026700001.jpg)
:::

## Question #151
**HOTSPOT -  
You have an Azure subscription that contains an Azure Synapse Analytics dedicated SQL pool named Pool1 and an Azure Data Lake Storage account named storage1. Storage1 requires secure transfers.  
You need to create an external data source in Pool1 that will be used to read .orc files in storage1.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0026800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0026900001.jpg)
:::

## Question #152
**You have an Azure subscription that contains an Azure Synapse Analytics dedicated SQL pool named SQLPool1.  
SQLPool1 is currently paused.  
You need to restore the current state of SQLPool1 to a new SQL pool.  
What should you do first?**

1. A. Create a workspace.
2. B. Create a user-defined restore point.
3. C. Resume SQLPool1.
4. D. Create a new SQL pool.

:::tip Answer
B
:::

## Question #153
**You are designing an Azure Synapse Analytics workspace.  
You need to recommend a solution to provide double encryption of all the data at rest.  
Which two components should you include in the recommendation? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. an X.509 certificate
2. B. an RSA key
3. C. an Azure virtual network that has a network security group (NSG)
4. D. an Azure Policy initiative
5. E. an Azure key vault that has purge protection enabled

:::tip Answer
BE
:::

## Question #154
**You have an Azure Synapse Analytics serverless SQL pool named Pool1 and an Azure Data Lake Storage Gen2 account named storage1. The AllowBlobPublicAccess property is disabled for storage1.  
You need to create an external data source that can be used by Azure Active Directory (Azure AD) users to access storage from Pool1.  
What should you create first?**

1. A. an external resource pool
2. B. an external library
3. C. database scoped credentials
4. D. a remote service binding

:::tip Answer
C
:::

## Question #155
**You have an Azure Data Factory pipeline named Pipeline1. Pipeline1 contains a copy activity that sends data to an Azure Data Lake Storage Gen2 account.  
Pipeline1 is executed by a schedule trigger.  
You change the copy activity sink to a new storage account and merge the changes into the collaboration branch.  
After Pipeline1 executes, you discover that data is NOT copied to the new storage account.  
You need to ensure that the data is copied to the new storage account.  
What should you do?**

1. A. Publish from the collaboration branch.
2. B. Create a pull request.
3. C. Modify the schedule trigger.
4. D. Configure the change feed of the new storage account.

:::tip Answer
A
:::

## Question #156
**You have an Azure Data Factory pipeline named pipeline1 that is invoked by a tumbling window trigger named Trigger1. Trigger1 has a recurrence of 60 minutes.  
You need to ensure that pipeline1 will execute only if the previous execution completes successfully.  
How should you configure the self-dependency for Trigger1?**

1. A. offset: "-00:01:00" size: "00:01:00"
2. B. offset: "01:00:00" size: "-01:00:00"
3. C. offset: "01:00:00" size: "01:00:00"
4. D. offset: "-01:00:00" size: "01:00:00"

:::tip Answer
D
:::

## Question #157
**HOTSPOT -  
You have an Azure Synapse Analytics pipeline named Pipeline1 that contains a data flow activity named Dataflow1.  
Pipeline1 retrieves files from an Azure Data Lake Storage Gen 2 account named storage1.  
Dataflow1 uses the AutoResolveIntegrationRuntime integration runtime configured with a core count of 128.  
You need to optimize the number of cores used by Dataflow1 to accommodate the size of the files in storage1.  
What should you configure? To answer, select the appropriate options in the answer area.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0027400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0027400002.jpg)
:::

## Question #158
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You plan to create an Azure Databricks workspace that has a tiered structure. The workspace will contain the following three workloads:  
✑ A workload for data engineers who will use Python and SQL.  
✑ A workload for jobs that will run notebooks that use Python, Scala, and SQL.  
✑ A workload that data scientists will use to perform ad hoc analysis in Scala and R.  
The enterprise architecture team at your company identifies the following standards for Databricks environments:  
✑ The data engineers must share a cluster.  
✑ The job cluster will be managed by using a request process whereby data scientists and data engineers provide packaged notebooks for deployment to the cluster.  
✑ All the data scientists must be assigned their own cluster that terminates automatically after 120 minutes of inactivity. Currently, there are three data scientists.  
You need to create the Databricks clusters for the workloads.  
Solution: You create a Standard cluster for each data scientist, a High Concurrency cluster for the data engineers, and a Standard cluster for the jobs.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #159
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.    
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You plan to create an Azure Databricks workspace that has a tiered structure. The workspace will contain the following three workloads:  
✑ A workload for data engineers who will use Python and SQL.  
✑ A workload for jobs that will run notebooks that use Python, Scala, and SQL.  
✑ A workload that data scientists will use to perform ad hoc analysis in Scala and R.  
The enterprise architecture team at your company identifies the following standards for Databricks environments:  
✑ The data engineers must share a cluster.  
✑ The job cluster will be managed by using a request process whereby data scientists and data engineers provide packaged notebooks for deployment to the cluster.  
✑ All the data scientists must be assigned their own cluster that terminates automatically after 120 minutes of inactivity. Currently, there are three data scientists.  
You need to create the Databricks clusters for the workloads.  
Solution: You create a Standard cluster for each data scientist, a High Concurrency cluster for the data engineers, and a High Concurrency cluster for the jobs.
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
A
:::

## Question #160
**You are designing a folder structure for the files in an Azure Data Lake Storage Gen2 account. The account has one container that contains three years of data.  
You need to recommend a folder structure that meets the following requirements:  
✑ Supports partition elimination for queries by Azure Synapse Analytics serverless SQL pools  
✑ Supports fast data retrieval for data from the current month  
✑ Simplifies data security management by department  
Which folder structure should you recommend?**

1. A. \Department\DataSource\YYYY\MM\DataFile_YYYYMMDD.parquet
2. B. \DataSource\Department\YYYYMM\DataFile_YYYYMMDD.parquet
3. C. \DD\MM\YYYY\Department\DataSource\DataFile_DDMMYY.parquet
4. D. \YYYY\MM\DD\Department\DataSource\DataFile_YYYYMMDD.parquet

:::tip Answer
A
:::

## Question #161
**You have an Azure subscription that contains an Azure Synapse Analytics dedicated SQL pool named Pool1. Pool1 receives new data once every 24 hours.  
You have the following function.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0027800001.jpg)

**You have the following query.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0027800002.jpg)

**The query is executed once every 15 minutes and the @parameter value is set to the current date.  
You need to minimize the time it takes for the query to return results.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Create an index on the avg_f column.
2. B. Convert the avg_c column into a calculated column.
3. C. Create an index on the sensorid column.
4. D. Enable result set caching.
5. E. Change the table distribution to replicate.

:::tip Answer
BD
:::

## Question #162
**You need to design a solution that will process streaming data from an Azure Event Hub and output the data to Azure Data Lake Storage. The solution must ensure that analysts can interactively query the streaming data.**

**What should you use?**

1. A. Azure Stream Analytics and Azure Synapse notebooks
2. B. Structured Streaming in Azure Databricks
3. C. event triggers in Azure Data Factory
4. D. Azure Queue storage and read-access geo-redundant storage (RA-GRS)

:::tip Answer
B
:::

## Question #163
**You are creating an Apache Spark job in Azure Databricks that will ingest JSON-formatted data.**

**You need to convert a nested JSON string into a DataFrame that will contain multiple rows.**

**Which Spark SQL function should you use?**

1. A. explode
2. B. filter
3. C. coalesce
4. D. extract

:::tip Answer
A
:::

## Question #164
**DRAG DROP -  
You have an Azure subscription that contains an Azure Databricks workspace. The workspace contains a notebook named Notebook1.  
In Notebook1, you create an Apache Spark DataFrame named df_sales that contains the following columns:**

• Customer  
• SalesPerson  
• Region  
• Amount

**You need to identify the three top performing salespersons by amount for a region named HQ.  
How should you complete the query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/dp-203/image266.png)

:::tip Answer  
![](https://img.examtopics.com/dp-203/image267.png)  
:::

## Question #165
**DRAG DROP -  
You have an Azure Active Directory (Azure AD) tenant that contains a security group named Group1. You have an Azure Synapse Analytics dedicated SQL pool named dw1 that contains a schema named schema1.  
You need to grant Group1 read-only permissions to all the tables and views in schema1. The solution must use the principle of least privilege.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0028800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0028900001.png)
:::

## Question #166
**HOTSPOT -  
You have an Azure subscription that contains a logical Microsoft SQL server named Server1. Server1 hosts an Azure Synapse Analytics SQL dedicated pool named Pool1.  
You need to recommend a Transparent Data Encryption (TDE) solution for Server1. The solution must meet the following requirements:  
✑ Track the usage of encryption keys.  
Maintain the access of client apps to Pool1 in the event of an Azure datacenter outage that affects the availability of the encryption keys.  
What should you include in the recommendation? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0029000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0029100001.png)
:::

## Question #167
**You plan to create an Azure Synapse Analytics dedicated SQL pool.  
You need to minimize the time it takes to identify queries that return confidential information as defined by the company's data privacy regulations and the users who executed the queues.  
Which two components should you include in the solution? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. sensitivity-classification labels applied to columns that contain confidential information
2. B. resource tags for databases that contain confidential information
3. C. audit logs sent to a Log Analytics workspace
4. D. dynamic data masking for columns that contain confidential information

:::tip Answer
AC
:::

## Question #168
**You are designing an enterprise data warehouse in Azure Synapse Analytics that will contain a table named Customers.  Customers will contain credit card information.  
You need to recommend a solution to provide salespeople with the ability to view all the entries in Customers. The solution must prevent all the salespeople from viewing or inferring the credit card information.  
What should you include in the recommendation?**

1. A. data masking
2. B. Always Encrypted
3. C. column-level security
4. D. row-level security

:::tip Answer
C
:::

## Question #169
**You develop data engineering solutions for a company.  
A project requires the deployment of data to Azure Data Lake Storage.  
You need to implement role-based access control (RBAC) so that project members can manage the Azure Data Lake Storage resources.  
Which three actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Create security groups in Azure Active Directory (Azure AD) and add project members.
2. B. Configure end-user authentication for the Azure Data Lake Storage account.
3. C. Assign Azure AD security groups to Azure Data Lake Storage.
4. D. Configure Service-to-service authentication for the Azure Data Lake Storage account.
5. E. Configure access control lists (ACL) for the Azure Data Lake Storage account.

:::tip Answer
ACE
:::

## Question #170
**You have an Azure Data Factory version 2 (V2) resource named Df1. Df1 contains a linked service.  
You have an Azure Key vault named vault1 that contains an encryption key named key1.  
You need to encrypt Df1 by using key1.  
What should you do first?**

1. A. Add a private endpoint connection to vault1.
2. B. Enable Azure role-based access control on vault1.
3. C. Remove the linked service from Df1.
4. D. Create a self-hosted integration runtime.

:::tip Answer
C
:::

## Question #171
**You are designing an Azure Synapse Analytics dedicated SQL pool.  
You need to ensure that you can audit access to Personally Identifiable Information (PII).  
What should you include in the solution?**

1. A. column-level security
2. B. dynamic data masking
3. C. row-level security (RLS)
4. D. sensitivity classifications

:::tip Answer
D
:::

## Question #172
**HOTSPOT -  
You have an Azure subscription that contains an Azure Data Lake Storage account. The storage account contains a data lake named DataLake1.  
You plan to use an Azure data factory to ingest data from a folder in DataLake1, transform the data, and land the data in another folder.  
You need to ensure that the data factory can read and write data from any folder in the DataLake1 file system. The solution must meet the following requirements:  
✑ Minimize the risk of unauthorized user access.  
✑ Use the principle of least privilege.  
✑ Minimize maintenance effort.  
How should you configure access to the storage account for the data factory? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0029700004.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0029700005.jpg)
:::

## Question #173
**HOTSPOT -  
You are designing an Azure Synapse Analytics dedicated SQL pool.  
Groups will have access to sensitive data in the pool as shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0029800004.png)

**You have policies for the sensitive data. The policies vary be region as shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0029900001.png)

**You have a table of patients for each region. The tables contain the following potentially sensitive columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0029900002.png)

**You are designing dynamic data masking to maintain compliance.  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0030000001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0030000002.jpg)
:::

## Question #174
**DRAG DROP -  
You have an Azure Synapse Analytics SQL pool named Pool1 on a logical Microsoft SQL server named Server1.  
You need to implement Transparent Data Encryption (TDE) on Pool1 by using a custom key named key1.  
Which five actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0030100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0030200001.png)
:::

## Question #175
**You have a data warehouse in Azure Synapse Analytics.  
You need to ensure that the data in the data warehouse is encrypted at rest.  
What should you enable?**

1. A. Advanced Data Security for this database
2. B. Transparent Data Encryption (TDE)
3. C. Secure transfer required
4. D. Dynamic Data Masking

:::tip Answer
B
:::

## Question #176
**You are designing a streaming data solution that will ingest variable volumes of data.  
You need to ensure that you can change the partition count after creation.  
Which service should you use to ingest the data?**

1. A. Azure Event Hubs Dedicated
2. B. Azure Stream Analytics
3. C. Azure Data Factory
4. D. Azure Synapse Analytics

:::tip Answer
A
:::

## Question #177
**You are designing a date dimension table in an Azure Synapse Analytics dedicated SQL pool. The date dimension table will be used by all the fact tables.  
Which distribution type should you recommend to minimize data movement during queries?**

1. A. HASH
2. B. REPLICATE
3. C. ROUND_ROBIN

:::tip Answer
B
:::

## Question #178
**HOTSPOT -  
You develop a dataset named DBTBL1 by using Azure Databricks.
DBTBL1 contains the following columns:  
✑ SensorTypeID  
✑ GeographyRegionID  
✑ Year  
✑ Month  
✑ Day  
✑ Hour  
✑ Minute  
✑ Temperature  
✑ WindSpeed  
✑ Other  
You need to store the data to support daily incremental load pipelines that vary for each GeographyRegionID. The solution must minimize storage costs.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0030600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0030700001.png)
:::

## Question #179
**You are designing a security model for an Azure Synapse Analytics dedicated SQL pool that will support multiple companies.  
You need to ensure that users from each company can view only the data of their respective company.  
Which two objects should you include in the solution? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. a security policy
2. B. a custom role-based access control (RBAC) role
3. C. a predicate function
4. D. a column encryption key
5. E. asymmetric keys

:::tip Answer
AB
:::

## Question #180
**You have a SQL pool in Azure Synapse that contains a table named dbo.Customers. The table contains a column name Email.
You need to prevent nonadministrative users from seeing the full email addresses in the Email column. The users must see values in a format of aXXX@XXXX.com instead.  
What should you do?**

1. A. From Microsoft SQL Server Management Studio, set an email mask on the Email column.
2. B. From the Azure portal, set a mask on the Email column.
3. C. From Microsoft SQL Server Management Studio, grant the SELECT permission to the users for all the columns in the dbo.Customers table except Email.
4. D. From the Azure portal, set a sensitivity classification of Confidential for the Email column.

:::tip Answer
A
:::

## Question #181
**You have an Azure Data Lake Storage Gen2 account named adls2 that is protected by a virtual network.  
You are designing a SQL pool in Azure Synapse that will use adls2 as a source.  
What should you use to authenticate to adls2?**

1. A. an Azure Active Directory (Azure AD) user
2. B. a shared key
3. C. a shared access signature (SAS)
4. D. a managed identity

:::tip Answer
D
:::

## Question #182
**HOTSPOT -  
You have an Azure Synapse Analytics SQL pool named Pool1. In Azure Active Directory (Azure AD), you have a security group named Group1.  
You need to control the access of Group1 to specific columns and rows in a table in Pool1.  
Which Transact-SQL commands should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0031100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0031200001.jpg)
:::

## Question #183
**HOTSPOT -  
You need to implement an Azure Databricks cluster that automatically connects to Azure Data Lake Storage Gen2 by using Azure Active Directory (Azure AD) integration.  
How should you configure the new cluster? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0031300001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0031300002.png)
:::

## Question #184
**You are designing an Azure Synapse solution that will provide a query interface for the data stored in an Azure Storage account. The storage account is only accessible from a virtual network.  
You need to recommend an authentication mechanism to ensure that the solution can access the source data.  
What should you recommend?**

1. A. a managed identity
2. B. anonymous public read access
3. C. a shared key

:::tip Answer
A
:::

## Question #185
**You are developing an application that uses Azure Data Lake Storage Gen2.  
You need to recommend a solution to grant permissions to a specific application for a limited time period.  
What should you include in the recommendation?**

1. A. role assignments
2. B. shared access signatures (SAS)
3. C. Azure Active Directory (Azure AD) identities
4. D. account keys

:::tip Answer
B
:::

## Question #186
**HOTSPOT -  
You use Azure Data Lake Storage Gen2 to store data that data scientists and data engineers will query by using Azure Databricks interactive notebooks. Users will have access only to the Data Lake Storage folders that relate to the projects on which they work.  
You need to recommend which authentication methods to use for Databricks and Data Lake Storage to provide the users with the appropriate access. The solution must minimize administrative effort and development effort.  
Which authentication method should you recommend for each Azure service? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0031600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0031700001.png)
:::

## Question #187
**You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Contacts. Contacts contains a column named Phone.  
You need to ensure that users in a specific role only see the last four digits of a phone number when querying the Phone column.  
What should you include in the solution?**

1. A. table partitions
2. B. a default value
3. C. row-level security (RLS)
4. D. column encryption
5. E. dynamic data masking

:::tip Answer
E
:::

## Question #188
**You are designing database for an Azure Synapse Analytics dedicated SQL pool to support workloads for detecting ecommerce transaction fraud.  
Data will be combined from multiple ecommerce sites and can include sensitive financial information such as credit card numbers.  
You need to recommend a solution that meets the following requirements:  
Users must be able to identify potentially fraudulent transactions.  
✑ Users must be able to use credit cards as a potential feature in models.  
✑ Users must NOT be able to access the actual credit card numbers.  
What should you include in the recommendation?**

1. A. Transparent Data Encryption (TDE)
2. B. row-level security (RLS)
3. C. column-level encryption
4. D. Azure Active Directory (Azure AD) pass-through authentication

:::tip Answer
C
:::

## Question #189
**You have an Azure subscription linked to an Azure Active Directory (Azure AD) tenant that contains a service principal named ServicePrincipal1. The subscription contains an Azure Data Lake Storage account named adls1. Adls1 contains a folder named Folder2 that has a URI of https://adls1.dfs.core.windows.net/ container1/Folder1/Folder2/.  
ServicePrincipal1 has the access control list (ACL) permissions shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0031900003.png)

**You need to ensure that ServicePrincipal1 can perform the following actions:  
✑ Traverse child items that are created in Folder2.  
✑ Read files that are created in Folder2.  
The solution must use the principle of least privilege.  
Which two permissions should you grant to ServicePrincipal1 for Folder2? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Access ג€" Read
2. B. Access ג€" Write
3. C. Access ג€" Execute
4. D. Default ג€" Read
5. E. Default ג€" Write
6. F. Default ג€" Execute

:::tip Answer
DF
:::

## Question #190
**HOTSPOT -  
You have an Azure subscription that is linked to a hybrid Azure Active Directory (Azure AD) tenant. The subscription contains an Azure Synapse Analytics SQL pool named Pool1.
You need to recommend an authentication solution for Pool1. The solution must support multi-factor authentication (MFA) and database-level authentication.  
Which authentication solution or solutions should you include in the recommendation? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0032100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0032200001.png)
:::

## Question #191
**DRAG DROP -  
You have an Azure data factory.  
You need to ensure that pipeline-run data is retained for 120 days. The solution must ensure that you can query the data by using the Kusto query language.  
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0032300001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0032400001.png)
:::

## Question #192
**You have an Azure Synapse Analytics dedicated SQL pool.  
You need to ensure that data in the pool is encrypted at rest. The solution must NOT require modifying applications that query the data.  
What should you do?**

1. A. Enable encryption at rest for the Azure Data Lake Storage Gen2 account.
2. B. Enable Transparent Data Encryption (TDE) for the pool.
3. C. Use a customer-managed key to enable double encryption for the Azure Synapse workspace.
4. D. Create an Azure key vault in the Azure subscription grant access to the pool.

:::tip Answer
B
:::

## Question #193
**DRAG DROP -  
You have an Azure subscription that contains an Azure Data Lake Storage Gen2 account named storage1. Storage1 contains a container named container1.  
Container1 contains a directory named directory1. Directory1 contains a file named file1.  
You have an Azure Active Directory (Azure AD) user named User1 that is assigned the Storage Blob Data Reader role for storage1.  
You need to ensure that User1 can append data to file1. The solution must use the principle of least privilege.  
Which permissions should you grant? To answer, drag the appropriate permissions to the correct resources. Each permission may be used once, more than once, or not at all.   You may need to drag the split bar between panes or scroll to view content.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0032600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0032700001.jpg)
:::

## Question #194
**HOTSPOT -   
You have an Azure subscription that contains an Azure Databricks workspace named databricks1 and an Azure Synapse Analytics workspace named synapse1.  
The synapse1 workspace contains an Apache Spark pool named pool1.  
You need to share an Apache Hive catalog of pool1 with databricks1.  
What should you do? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0032800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0032800002.jpg)
:::

## Question #195
**HOTSPOT -  
You have an Azure subscription.  
You need to deploy an Azure Data Lake Storage Gen2 Premium account. The solution must meet the following requirements:**  

* **Blobs that are older than 365 days must be deleted.**  
* **Administrative effort must be minimized.**  
* **Costs must be minimized.** 


**What should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0033000001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0033100001.jpg)
:::

## Question #196
**HOTSPOT -  
You are designing an application that will use an Azure Data Lake Storage Gen 2 account to store petabytes of license plate photos from toll booths. The account will use zone-redundant storage (ZRS).  
You identify the following usage patterns:**
* **The data will be accessed several times a day during the first 30 days after the data is created. The data must meet an availability SLA of 99.9%.**
* **After 90 days, the data will be accessed infrequently but must be available within 30 seconds.**
* **After 365 days, the data will be accessed infrequently but must be available within five minutes.**
  
**You need to recommend a data retention solution. The solution must minimize costs.  
Which access tier should you recommend for each time frame? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.   
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0033300001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0033500001.jpg)
:::

## Question #197
**DRAG DROP -  
You have an Azure Data Lake Storage Gen 2 account named storage1.  
You need to recommend a solution for accessing the content in storage1. The solution must meet the following requirements:  
• List and read permissions must be granted at the storage account level.  
• Additional permissions can be applied to individual objects in storage1.  
• Security principals from Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra, must be used for authentication.  
What should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/dp-203/image268.png)

:::tip Answer  
![](https://img.examtopics.com/dp-203/image269.png)  
:::

## Question #198
**You implement an enterprise data warehouse in Azure Synapse Analytics.  
You have a large fact table that is 10 terabytes (TB) in size.  
Incoming queries use the primary key SaleKey column to retrieve data as displayed in the following table:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0034000001.png)

**You need to distribute the large fact table across multiple nodes to optimize performance of the table.  
Which technology should you use?**

1. A. hash distributed table with clustered index
2. B. hash distributed table with clustered Columnstore index
3. C. round robin distributed table with clustered index
4. D. round robin distributed table with clustered Columnstore index
5. E. heap table with distribution replicate

:::tip Answer
B
:::

## Question #199
**You have an Azure Synapse Analytics dedicated SQL pool that contains a large fact table. The table contains 50 columns and 5 billion rows and is a heap.  
Most queries against the table aggregate values from approximately 100 million rows and return only two columns.  
You discover that the queries against the fact table are very slow.  
Which type of index should you add to provide the fastest query times?**

1. A. nonclustered columnstore
2. B. clustered columnstore
3. C. nonclustered
4. D. clustered

:::tip Answer
B
:::

## Question #200
**You create an Azure Databricks cluster and specify an additional library to install.  
When you attempt to load the library to a notebook, the library in not found.  
You need to identify the cause of the issue.  
What should you review?**

1. A. notebook logs
2. B. cluster event logs
3. C. global init scripts logs
4. D. workspace logs

:::tip Answer
C
:::

## Question #201
**You have an Azure data factory.  
You need to examine the pipeline failures from the last 60 days.  
What should you use?**

1. A. the Activity log blade for the Data Factory resource
2. B. the Monitor & Manage app in Data Factory
3. C. the Resource health blade for the Data Factory resource
4. D. Azure Monitor

:::tip Answer
D 
:::

## Question #202
**You are monitoring an Azure Stream Analytics job.  
The Backlogged Input Events count has been 20 for the last hour.  
You need to reduce the Backlogged Input Events count.  
What should you do?**

1. A. Drop late arriving events from the job.
2. B. Add an Azure Storage account to the job.
3. C. Increase the streaming units for the job.
4. D. Stop the job.

:::tip Answer
C
:::

## Question #203
**You are designing an Azure Databricks interactive cluster.  The cluster will be used infrequently and will be configured for auto-termination.  
You need to ensure that the cluster configuration is retained indefinitely after the cluster is terminated. The solution must minimize costs.  
What should you do?**

1. A. Pin the cluster.
2. B. Create an Azure runbook that starts the cluster every 90 days.
3. C. Terminate the cluster manually when processing completes.
4. D. Clone the cluster after it is terminated.

:::tip Answer
A
:::

## Question #204
**You have an Azure data solution that contains an enterprise data warehouse in Azure Synapse Analytics named DW1.  
Several users execute ad hoc queries to DW1 concurrently.  
You regularly perform automated data loads to DW1.  
You need to ensure that the automated data loads have enough memory available to complete quickly and successfully when the adhoc queries run.  
What should you do?**

1. A. Hash distribute the large fact tables in DW1 before performing the automated data loads.
2. B. Assign a smaller resource class to the automated data load queries.
3. C. Assign a larger resource class to the automated data load queries.
3. D. Create sampled statistics for every column in each table of DW1.

:::tip Answer
C
:::

## Question #205
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1 and a database named DB1. DB1 contains a fact table named Table1.  
You need to identify the extent of the data skew in Table1.  
What should you do in Synapse Studio?**

1. A. Connect to the built-in pool and run DBCC PDW_SHOWSPACEUSED.
2. B. Connect to the built-in pool and run DBCC CHECKALLOC.
3. C. Connect to Pool1 and query sys.dm_pdw_node_status.
4. D. Connect to Pool1 and query sys.dm_pdw_nodes_db_partition_stats.

:::tip Answer
D
:::

## Question #206
**HOTSPOT -  
You need to collect application metrics, streaming query events, and application log messages for an Azure Databrick cluster.  
Which type of library and workspace should you implement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0034600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0034700001.png)
:::

## Question #207
**You have a SQL pool in Azure Synapse.  
You discover that some queries fail or take a long time to complete.  
You need to monitor for transactions that have rolled back.  
Which dynamic management view should you query?**

1. A. sys.dm_pdw_request_steps
2. B. sys.dm_pdw_nodes_tran_database_transactions
3. C. sys.dm_pdw_waits
4. D. sys.dm_pdw_exec_sessions

:::tip Answer
B
:::

## Question #208
**You are monitoring an Azure Stream Analytics job.  
You discover that the Backlogged Input Events metric is increasing slowly and is consistently non-zero.  
You need to ensure that the job can handle all the events.  
What should you do?**

1. A. Change the compatibility level of the Stream Analytics job.
2. B. Increase the number of streaming units (SUs).
3. C. Remove any named consumer groups from the connection and use $default.
4. D. Create an additional output stream for the existing input stream.

:::tip Answer
B
:::

## Question #209
**You are designing an inventory updates table in an Azure Synapse Analytics dedicated SQL pool. The table will have a clustered columnstore index and will include the following columns:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0034900001.png)

**You identify the following usage patterns:  
✑ Analysts will most commonly analyze transactions for a warehouse.  
✑ Queries will summarize by product category type, date, and/or inventory event type.  
You need to recommend a partition strategy for the table to minimize query times.  
On which column should you partition the table?**

1. A. EventTypeID
2. B. ProductCategoryTypeID
3. C. EventDate
4. D. WarehouseID

:::tip Answer
D
:::

## Question #210
**You are designing a star schema for a dataset that contains records of online orders. Each record includes an order date, an order due date, and an order ship date.  
You need to ensure that the design provides the fastest query times of the records when querying for arbitrary date ranges and aggregating by fiscal calendar attributes.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Create a date dimension table that has a DateTime key.
2. B. Use built-in SQL functions to extract date attributes.
3. C. Create a date dimension table that has an integer key in the format of YYYYMMDD.
4. D. In the fact table, use integer columns for the date fields.
5. E. Use DateTime columns for the date fields.

:::tip Answer
BD
:::

## Question #211
**A company purchases IoT devices to monitor manufacturing machinery. The company uses an Azure IoT Hub to communicate with the IoT devices.  
The company must be able to monitor the devices in real-time.
You need to design the solution.  
What should you recommend?**

1. A. Azure Analysis Services using Azure Portal
2. B. Azure Analysis Services using Azure PowerShell
3. C. Azure Stream Analytics cloud job using Azure Portal
4. D. Azure Data Factory instance using Microsoft Visual Studio

:::tip Answer
C
:::

## Question #212
**You have a SQL pool in Azure Synapse.  
A user reports that queries against the pool take longer than expected to complete. You determine that the issue relates to queried columnstore segments.  
You need to add monitoring to the underlying storage to help diagnose the issue.  
Which two metrics should you monitor? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Snapshot Storage Size
2. B. Cache used percentage
3. C. DWU Limit
4. D. Cache hit percentage

:::tip Answer
BD
:::

## Question #213
**You manage an enterprise data warehouse in Azure Synapse Analytics.  
Users report slow performance when they run commonly used queries. Users do not report performance changes for infrequently used queries.  
You need to monitor resource utilization to determine the source of the performance issues.  
Which metric should you monitor?**

1. A. DWU percentage
2. B. Cache hit percentage
3. C. DWU limit
4. D. Data IO percentage

:::tip Answer
B
:::

## Question #214
**You have an Azure Databricks resource.  
You need to log actions that relate to changes in compute for the Databricks resource.  
Which Databricks services should you log?**

1. A. clusters
2. B. workspace
3. C. DBFS
4. D. SSH
5. E. jobs

:::tip Answer
B
:::

## Question #215
**You are designing a highly available Azure Data Lake Storage solution that will include geo-zone-redundant storage (GZRS).  
You need to monitor for replication delays that can affect the recovery point objective (RPO).  
What should you include in the monitoring solution?**

1. A. 5xx: Server Error errors
2. B. Average Success E2E Latency
3. C. availability
4. D. Last Sync Time

:::tip Answer
D
:::

## Question #216
**You configure monitoring for an Azure Synapse Analytics implementation. The implementation uses PolyBase to load data from comma-separated value (CSV) files stored in Azure Data Lake Storage Gen2 using an external table.  
Files with an invalid schema cause errors to occur.  
You need to monitor for an invalid schema error.  
For which error should you monitor?**

1. A. EXTERNAL TABLE access failed due to internal error: 'Java exception raised on call to HdfsBridge_Connect: Error [com.microsoft.polybase.client.KerberosSecureLogin] occurred while accessing external file.'
2. B. Cannot execute the query "Remote Query" against OLE DB provider "SQLNCLI11" for linked server "(null)". Query aborted- the maximum reject threshold (0 rows) was reached while reading from an external source: 1 rows rejected out of total 1 rows processed.
3. C. EXTERNAL TABLE access failed due to internal error: 'Java exception raised on call to HdfsBridge_Connect: Error [Unable to instantiate LoginClass] occurred while accessing external file.'
4. D. EXTERNAL TABLE access failed due to internal error: 'Java exception raised on call to HdfsBridge_Connect: Error [No FileSystem for scheme: wasbs] occurred while accessing external file.'

:::tip Answer
B
:::

## Question #217
**You have an Azure Synapse Analytics dedicated SQL pool.  
You run PDW_SHOWSPACEUSED('dbo.FactInternetSales'); and get the results shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0035600001.png)

**Which statement accurately describes the dbo.  FactInternetSales table?**

1. A. All distributions contain data.
2. B. The table contains less than 10,000 rows.
3. C. The table uses round-robin distribution.
4. D. The table is skewed.

:::tip Answer
D
:::

## Question #218
**You have two fact tables named Flight and Weather. Queries targeting the tables will be based on the join between the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0035700001.png)

**You need to recommend a solution that maximizes query performance.  
What should you include in the recommendation?**

1. A. In the tables use a hash distribution of ArrivalDateTime and ReportDateTime.
2. B. In the tables use a hash distribution of ArrivalAirportID and AirportID.
3. C. In each table, create an IDENTITY column.
4. D. In each table, create a column as a composite of the other two columns in the table.

:::tip Answer
B
:::

## Question #219
**HOTSPOT -  
You have an Azure Data Factory pipeline that has the activities shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0035800001.jpg)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0035800002.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0035900001.png)
:::

## Question #220
**You have several Azure Data Factory pipelines that contain a mix of the following types of activities:  
✑ Wrangling data flow  
✑ Notebook  
✑ Copy  
✑ Jar  
Which two Azure services should you use to debug the activities? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point**

1. A. Azure Synapse Analytics
2. B. Azure HDInsight
3. C. Azure Machine Learning
4. D. Azure Data Factory
5. E. Azure Databricks

:::tip Answer
AC
:::

## Question #221
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1 and a database named DB1. DB1 contains a fact table named Table1.  
You need to identify the extent of the data skew in Table1.  
What should you do in Synapse Studio?**

1. A. Connect to the built-in pool and run sys.dm_pdw_nodes_db_partition_stats.
2. B. Connect to Pool1 and run DBCC CHECKALLOC.
3. C. Connect to the built-in pool and run DBCC CHECKALLOC.
4. D. Connect to Pool1 and query sys.dm_pdw_nodes_db_partition_stats.

:::tip Answer
D
:::

## Question #222
**You manage an enterprise data warehouse in Azure Synapse Analytics.  
Users report slow performance when they run commonly used queries. Users do not report performance changes for infrequently used queries.  
You need to monitor resource utilization to determine the source of the performance issues.  
Which metric should you monitor?**

1. A. Local tempdb percentage
2. B. Cache used percentage
3. C. Data IO percentage
4. D. CPU percentage

:::tip Answer
B
:::

## Question #223
**You have an Azure data factory.  
You need to examine the pipeline failures from the last 180 days.  
What should you use?**

1. A. the Activity log blade for the Data Factory resource
2. B. Pipeline runs in the Azure Data Factory user experience
3. C. the Resource health blade for the Data Factory resource
4. D. Azure Data Factory activity runs in Azure Monitor

:::tip Answer
D
:::

## Question #224
**A company purchases IoT devices to monitor manufacturing machinery. The company uses an Azure IoT Hub to communicate with the IoT devices.  
The company must be able to monitor the devices in real-time.
You need to design the solution.  
What should you recommend?**

1. A. Azure Analysis Services using Azure PowerShell
2. B. Azure Stream Analytics Edge application using Microsoft Visual Studio
3. C. Azure Analysis Services using Microsoft Visual Studio
4. D. Azure Data Factory instance using Azure Portal

:::tip Answer
B
:::

## Question #225
**You have an Azure Synapse Analytics dedicated SQL pool named SA1 that contains a table named Table1.  
You need to identify tables that have a high percentage of deleted rows.  
What should you run?**

1. A. sys.pdw_nodes_column_store_segments
2. B. sys.dm_db_column_store_row_group_operational_stats
3. C. sys.pdw_nodes_column_store_row_groups
4. D. sys.dm_db_column_store_row_group_physical_stats

:::tip Answer
C
:::

## Question #226
**You have an enterprise data warehouse in Azure Synapse Analytics.  
You need to monitor the data warehouse to identify whether you must scale up to a higher service level to accommodate the current workloads.  
Which is the best metric to monitor?  
More than one answer choice may achieve the goal. Select the BEST answer.**

1. A. DWU used
2. B. CPU percentage
3. C. DWU percentage
4. D. Data IO percentage

:::tip Answer
A
:::

## Question #227
**A company purchases IoT devices to monitor manufacturing machinery. The company uses an Azure IoT Hub to communicate with the IoT devices.  
The company must be able to monitor the devices in real-time.  
You need to design the solution.  
What should you recommend?**

1. A. Azure Analysis Services using Azure PowerShell
2. B. Azure Data Factory instance using Azure PowerShell
3. C. Azure Stream Analytics cloud job using Azure Portal
4. D. Azure Data Factory instance using Microsoft Visual Studio

:::tip Answer
C
:::

## Question #228
**HOTSPOT -  
You have an Azure event hub named retailhub that has 16 partitions. Transactions are posted to retailhub. Each transaction includes the transaction ID, the individual line items, and the payment details. The transaction ID is used as the partition key.  
You are designing an Azure Stream Analytics job to identify potentially fraudulent transactions at a retail store. The job will use retailhub as the input. The job will output the transaction ID, the individual line items, the payment details, a fraud score, and a fraud indicator.  
You plan to send the output to an Azure event hub named fraudhub.   
You need to ensure that the fraud detection solution is highly scalable and processes transactions as quickly as possible.  
How should you structure the output of the Stream Analytics job? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0036700001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0036800001.png)
:::

## Question #229
**HOTSPOT -  
You have an on-premises data warehouse that includes the following fact tables. Both tables have the following columns: DateKey, ProductKey, RegionKey.  
There are 120 unique product keys and 65 unique region keys.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0036900001.png)

**Queries that use the data warehouse take a long time to complete.  
You plan to migrate the solution to use Azure Synapse Analytics. You need to ensure that the Azure-based solution optimizes query performance and minimizes processing skew.  
What should you recommend? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0037000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0037100001.png)
:::

## Question #230
**You have a partitioned table in an Azure Synapse Analytics dedicated SQL pool.  
You need to design queries to maximize the benefits of partition elimination.  
What should you include in the Transact-SQL queries?**

1. A. JOIN
2. B. WHERE
3. C. DISTINCT
4. D. GROUP BY

:::tip Answer
B
:::

## Question #231
**You have an Azure Stream Analytics query. The query returns a result set that contains 10,000 distinct values for a column named clusterID.  
You monitor the Stream Analytics job and discover high latency.  
You need to reduce the latency.  
Which two actions should you perform? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1. A. Add a pass-through query.
2. B. Increase the number of streaming units.
3. C. Add a temporal analytic function.
4. D. Scale out the query by using PARTITION BY.
5. E. Convert the query to a reference query.

:::tip Answer
BD
:::

## Question #232
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1 and a database named DB1. DB1 contains a fact table named Table1.   
You need to identify the extent of the data skew in Table1.  
What should you do in Synapse Studio?**

1. A. Connect to the built-in pool and query sys.dm_pdw_nodes_db_partition_stats.
2. B. Connect to the built-in pool and run DBCC CHECKALLOC.
3. C. Connect to Pool1 and query sys.dm_pdw_node_status.
4. D. Connect to Pool1 and query sys.dm_pdw_nodes_db_partition_stats.

:::tip Answer
A
:::

## Question #233
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1. Pool1 contains a fact table named Table1.  
You need to identify the extent of the data skew in Table1.  
What should you do in Synapse Studio?**

1. A. Connect to Pool1 and DBCC PDW_SHOWSPACEUSED.
2. B. Connect to the built-in pool and run DBCC PDW_SHOWSPACEUSED.
3. C. Connect to the built-in pool and run DBCC CHECKALLOC.
4. D. Connect to the built-in pool and query sys.dm_pdw_sys_info.

:::tip Answer
D
:::

## Question #234
**You use Azure Data Lake Storage Gen2.  
You need to ensure that workloads can use filter predicates and column projections to filter data at the time the data is read from disk.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. Reregister the Azure Storage resource provider.
2. B. Create a storage policy that is scoped to a container.
3. C. Reregister the Microsoft Data Lake Store resource provider.
4. D. Create a storage policy that is scoped to a container prefix filter.
5. E. Register the query acceleration feature.

:::tip Answer
AE
:::

## Question #235
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1. Pool1 contains a fact table named Table1.  
You need to identify the extent of the data skew in Table1.  
What should you do in Synapse Studio?**

1. A. Connect to Pool1 and run DBCC PDW_SHOWSPACEUSED.
2. B. Connect to the built-in pool and run DBCC PDW_SHOWSPACEUSED.
3. C. Connect to Pool1 and run DBCC CHECKALLOC.
4. D. Connect to the built-in pool and query sys.dm_pdw_sys_info.

:::tip Answer
B
:::

## Question #236
**You have an Azure Data Lake Storage Gen2 account that contains two folders named Folder1 and Folder2.   
You use Azure Data Factory to copy multiple files from Folder1 to Folder2.  
You receive the following error.  
Operation on target Copy_sks failed: Failure happened on 'Sink' side.  
ErrorCode=DelimitedTextMoreColumnsThanDefined,
'Type=Microsoft.DataTransfer.Common.Snared.HybridDeliveryException,
Message=Error found when processing 'Csv/Tsv Format Text' source
'0_2020_11_09_11_43_32.avro' with row number 53: found more columns than expected column count 27., Source=Microsoft.DataTransfer.Comnon,'  
What should you do to resolve the error?**

1. A. Change the Copy activity setting to Binary Copy.
2. B. Lower the degree of copy parallelism.
3. C. Add an explicit mapping.
4. D. Enable fault tolerance to skip incompatible rows.

:::tip Answer
C
:::

## Question #237
**A company plans to use Apache Spark analytics to analyze intrusion detection data.  
You need to recommend a solution to analyze network and system activity data for malicious activities and policy violations. The solution must minimize administrative efforts.  
What should you recommend?**

1. A. Azure HDInsight
2. B. Azure Data Factory
3. C. Azure Data Lake Storage
4. D. Azure Databricks

:::tip Answer
D
:::

## Question #238
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
HOTSPOT -**  
**You need to design a data storage structure for the product sales transactions. The solution must meet the sales transaction dataset requirements.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0000400004.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0000500001.jpg)
:::

## Question #239
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
DRAG DROP -**
**You need to ensure that the Twitter feed data can be analyzed in the dedicated SQL pool. The solution must meet the customer sentiment analytics requirements.  
Which three Transact-SQL DDL commands should you run in sequence? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.  
NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0000600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0000600002.png)
:::

## Question #240
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question    
HOTSPOT -  
You need to design the partitions for the product sales transactions. The solution must meet the sales transaction dataset requirements.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0000800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0000900001.png)
:::

## Question #241
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
You need to implement the surrogate key for the retail store table. The solution must meet the sales transaction dataset requirements.  
What should you create?**

1. A. a table that has an IDENTITY property
2. B. a system-versioned temporal table
3. C. a user-defined SEQUENCE object
4. D. a table that has a FOREIGN KEY constraint

:::tip Answer
A
:::

## Question #242
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
HOTSPOT -  
You need to design an analytical storage solution for the transactional data. The solution must meet the sales transaction dataset requirements.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001100001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0001200001.jpg)
:::

## Question #243
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
HOTSPOT -  
You need to implement an Azure Synapse Analytics database object for storing the sales transactions data. The solution must meet the sales transaction dataset requirements.  
What should you do? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001300001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0001300002.jpg)
:::

## Question #244
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
You need to design a data retention solution for the Twitter feed data records. The solution must meet the customer sentiment analytics requirements.  
Which Azure Storage functionality should you include in the solution?**

1. A. change feed
2. B. soft delete
3. C. time-based retention
4. D. lifecycle management

:::tip Answer
D
:::

## Question #245
**Introductory Info   
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**  
Litware, Inc. owns and operates 300 convenience stores across the US. The company sells a variety of packaged foods and drinks, as well as a variety of prepared foods, such as sandwiches and pizzas.
Litware has a loyalty club whereby members can get daily discounts on specific items by providing their membership number at checkout.
Litware employs business analysts who prefer to analyze data by using Microsoft Power BI, and data scientists who prefer analyzing data in Azure Databricks notebooks.

**Requirements -**  

**Business Goals -**   
Litware wants to create a new analytics environment in Azure to meet the following requirements:
See inventory levels across the stores. Data must be updated as close to real time as possible.
Execute ad hoc analytical queries on historical data to identify whether the loyalty club discounts increase sales of the discounted products.
Every four hours, notify store employees about how many prepared food items to produce based on historical demand from the sales data.

**Technical Requirements -**  
Litware identifies the following technical requirements:
Minimize the number of different Azure services needed to achieve the business goals.
Use platform as a service (PaaS) offerings whenever possible and avoid having to provision virtual machines that must be managed by Litware.
Ensure that the analytical data store is accessible only to the company's on-premises network and Azure services.
Use Azure Active Directory (Azure AD) authentication whenever possible.
Use the principle of least privilege when designing security.
Stage Inventory data in Azure Data Lake Storage Gen2 before loading the data into the analytical data store. Litware wants to remove transient data from Data
Lake Storage once the data is no longer in use. Files that have a modified date that is older than 14 days must be removed.
Limit the business analysts' access to customer contact information, such as phone numbers, because this type of data is not analytically relevant.
Ensure that you can quickly restore a copy of the analytical data store within one hour in the event of corruption or accidental deletion.

**Planned Environment -**  
Litware plans to implement the following environment:
The application development team will create an Azure event hub to receive real-time sales data, including store number, date, time, product ID, customer loyalty number, price, and discount amount, from the point of sale (POS) system and output the data to data storage in Azure.
Customer data, including name, contact information, and loyalty number, comes from Salesforce, a SaaS application, and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Product data, including product ID, name, and category, comes from Salesforce and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Daily inventory data comes from a Microsoft SQL server located on a private network.
Litware currently has 5 TB of historical sales data and 100 GB of customer data. The company expects approximately 100 GB of new data per month for the next year.
Litware will build a custom application named FoodPrep to provide store employees with the calculation results of how many prepared food items to produce every four hours.
Litware does not plan to implement Azure ExpressRoute or a VPN between the on-premises network and Azure.

**Question  
HOTSPOT -  
Which Azure Data Factory components should you recommend using together to import the daily inventory data from the SQL server to Azure Data Lake Storage?  
To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0013900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0014000001.png)
:::

## Question #246
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
DRAG DROP -  
You need to implement versioned changes to the integration pipelines. The solution must meet the data integration requirements.  
In which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0014400004.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0014500001.jpg)
:::

## Question #247
**Introductory Info  
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**    
Contoso, Ltd. is a clothing retailer based in Seattle. The company has 2,000 retail stores across the United States and an emerging online presence.
The network contains an Active Directory forest named contoso.com. The forest it integrated with an Azure Active Directory (Azure AD) tenant named contoso.com. Contoso has an Azure subscription associated to the contoso.com Azure AD tenant.

**Existing Environment -**

**Transactional Data -**  
Contoso has three years of customer, transactional, operational, sourcing, and supplier data comprised of 10 billion records stored across multiple on-premises
Microsoft SQL Server servers. The SQL Server instances contain data from various operational systems. The data is loaded into the instances by using SQL
Server Integration Services (SSIS) packages.
You estimate that combining all product sales transactions into a company-wide sales transactions dataset will result in a single table that contains 5 billion rows, with one row per transaction.
Most queries targeting the sales transactions data will be used to identify which products were sold in retail stores and which products were sold online during different time periods. Sales transaction data that is older than three years will be removed monthly.
You plan to create a retail store table that will contain the address of each retail store. The table will be approximately 2 MB. Queries for retail store sales will include the retail store addresses.
You plan to create a promotional table that will contain a promotion ID. The promotion ID will be associated to a specific product. The product will be identified by a product ID. The table will be approximately 200 GB.

**Streaming Twitter Data -**  
The ecommerce department at Contoso develops an Azure logic app that captures trending Twitter feeds referencing the company's products and pushes the products to Azure Event Hubs.  
**Planned Changes and Requirements**  

**Planned Changes -**  
Contoso plans to implement the following changes:
Load the sales transaction dataset to Azure Synapse Analytics.
Integrate on-premises data stores with Azure Synapse Analytics by using SSIS packages.
Use Azure Synapse Analytics to analyze Twitter feeds to assess customer sentiments about products.
Sales Transaction Dataset Requirements
Contoso identifies the following requirements for the sales transaction dataset:
Partition data that contains sales transaction records. Partitions must be designed to provide efficient loads by month. Boundary values must belong to the partition on the right.
Ensure that queries joining and filtering sales transaction records based on product ID complete as quickly as possible.
Implement a surrogate key to account for changes to the retail store addresses.
Ensure that data storage costs and performance are predictable.
Minimize how long it takes to remove old records.
Customer Sentiment Analytics Requirements
Contoso identifies the following requirements for customer sentiment analytics:
Allow Contoso users to use PolyBase in an Azure Synapse Analytics dedicated SQL pool to query the content of the data records that host the Twitter feeds.
Data must be protected by using row-level security (RLS). The users must be authenticated by using their own Azure AD credentials.
Maximize the throughput of ingesting Twitter feeds from Event Hubs to Azure Storage without purchasing additional throughput or capacity units.
Store Twitter feeds in Azure Storage by using Event Hubs Capture. The feeds will be converted into Parquet files.
Ensure that the data store supports Azure AD-based access control down to the object level.
Minimize administrative effort to maintain the Twitter feed data records.

Purge Twitter feed data records that are older than two years.

**Data Integration Requirements -**  
Contoso identifies the following requirements for data integration:  
Use an Azure service that leverages the existing SSIS packages to ingest on-premises data into datasets stored in a dedicated SQL pool of Azure Synapse
Analytics and transform the data.
Identify a process to ensure that changes to the ingestion and transformation activities can be version-controlled and developed independently by multiple data engineers.

**Question  
HOTSPOT -  
You need to design a data ingestion and storage solution for the Twitter feeds. The solution must meet the customer sentiment analytics requirements.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0028200004.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0028300001.png)
:::

## Question #248
**Introductory Info   
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**  
Litware, Inc. owns and operates 300 convenience stores across the US. The company sells a variety of packaged foods and drinks, as well as a variety of prepared foods, such as sandwiches and pizzas.
Litware has a loyalty club whereby members can get daily discounts on specific items by providing their membership number at checkout.
Litware employs business analysts who prefer to analyze data by using Microsoft Power BI, and data scientists who prefer analyzing data in Azure Databricks notebooks.

**Requirements -**  

**Business Goals -**   
Litware wants to create a new analytics environment in Azure to meet the following requirements:
See inventory levels across the stores. Data must be updated as close to real time as possible.
Execute ad hoc analytical queries on historical data to identify whether the loyalty club discounts increase sales of the discounted products.
Every four hours, notify store employees about how many prepared food items to produce based on historical demand from the sales data.

**Technical Requirements -**  
Litware identifies the following technical requirements:
Minimize the number of different Azure services needed to achieve the business goals.
Use platform as a service (PaaS) offerings whenever possible and avoid having to provision virtual machines that must be managed by Litware.
Ensure that the analytical data store is accessible only to the company's on-premises network and Azure services.
Use Azure Active Directory (Azure AD) authentication whenever possible.
Use the principle of least privilege when designing security.
Stage Inventory data in Azure Data Lake Storage Gen2 before loading the data into the analytical data store. Litware wants to remove transient data from Data
Lake Storage once the data is no longer in use. Files that have a modified date that is older than 14 days must be removed.
Limit the business analysts' access to customer contact information, such as phone numbers, because this type of data is not analytically relevant.
Ensure that you can quickly restore a copy of the analytical data store within one hour in the event of corruption or accidental deletion.

**Planned Environment -**  
Litware plans to implement the following environment:
The application development team will create an Azure event hub to receive real-time sales data, including store number, date, time, product ID, customer loyalty number, price, and discount amount, from the point of sale (POS) system and output the data to data storage in Azure.
Customer data, including name, contact information, and loyalty number, comes from Salesforce, a SaaS application, and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Product data, including product ID, name, and category, comes from Salesforce and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Daily inventory data comes from a Microsoft SQL server located on a private network.
Litware currently has 5 TB of historical sales data and 100 GB of customer data. The company expects approximately 100 GB of new data per month for the next year.
Litware will build a custom application named FoodPrep to provide store employees with the calculation results of how many prepared food items to produce every four hours.
Litware does not plan to implement Azure ExpressRoute or a VPN between the on-premises network and Azure.

**Question  
What should you recommend to prevent users outside the Litware on-premises network from accessing the analytical data store?**

1. A. a server-level virtual network rule
2. B. a database-level virtual network rule
3. C. a server-level firewall IP rule
4. D. a database-level firewall IP rule

:::tip Answer
C
:::

## Question #249
**Introductory Info   
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**  
Litware, Inc. owns and operates 300 convenience stores across the US. The company sells a variety of packaged foods and drinks, as well as a variety of prepared foods, such as sandwiches and pizzas.
Litware has a loyalty club whereby members can get daily discounts on specific items by providing their membership number at checkout.
Litware employs business analysts who prefer to analyze data by using Microsoft Power BI, and data scientists who prefer analyzing data in Azure Databricks notebooks.

**Requirements -**  

**Business Goals -**   
Litware wants to create a new analytics environment in Azure to meet the following requirements:
See inventory levels across the stores. Data must be updated as close to real time as possible.
Execute ad hoc analytical queries on historical data to identify whether the loyalty club discounts increase sales of the discounted products.
Every four hours, notify store employees about how many prepared food items to produce based on historical demand from the sales data.

**Technical Requirements -**  
Litware identifies the following technical requirements:
Minimize the number of different Azure services needed to achieve the business goals.
Use platform as a service (PaaS) offerings whenever possible and avoid having to provision virtual machines that must be managed by Litware.
Ensure that the analytical data store is accessible only to the company's on-premises network and Azure services.
Use Azure Active Directory (Azure AD) authentication whenever possible.
Use the principle of least privilege when designing security.
Stage Inventory data in Azure Data Lake Storage Gen2 before loading the data into the analytical data store. Litware wants to remove transient data from Data
Lake Storage once the data is no longer in use. Files that have a modified date that is older than 14 days must be removed.
Limit the business analysts' access to customer contact information, such as phone numbers, because this type of data is not analytically relevant.
Ensure that you can quickly restore a copy of the analytical data store within one hour in the event of corruption or accidental deletion.

**Planned Environment -**  
Litware plans to implement the following environment:
The application development team will create an Azure event hub to receive real-time sales data, including store number, date, time, product ID, customer loyalty number, price, and discount amount, from the point of sale (POS) system and output the data to data storage in Azure.
Customer data, including name, contact information, and loyalty number, comes from Salesforce, a SaaS application, and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Product data, including product ID, name, and category, comes from Salesforce and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Daily inventory data comes from a Microsoft SQL server located on a private network.
Litware currently has 5 TB of historical sales data and 100 GB of customer data. The company expects approximately 100 GB of new data per month for the next year.
Litware will build a custom application named FoodPrep to provide store employees with the calculation results of how many prepared food items to produce every four hours.
Litware does not plan to implement Azure ExpressRoute or a VPN between the on-premises network and Azure.

**Question  
What should you recommend using to secure sensitive customer contact information?**

1. A. Transparent Data Encryption (TDE)
2. B. row-level security
3. C. column-level security Most Voted
4. D. data sensitivity labels

:::tip Answer
D
:::

## Question #250
**Introductory Info   
Case study -**  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

**To start the case study -**  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

**Overview -**  
Litware, Inc. owns and operates 300 convenience stores across the US. The company sells a variety of packaged foods and drinks, as well as a variety of prepared foods, such as sandwiches and pizzas.
Litware has a loyalty club whereby members can get daily discounts on specific items by providing their membership number at checkout.
Litware employs business analysts who prefer to analyze data by using Microsoft Power BI, and data scientists who prefer analyzing data in Azure Databricks notebooks.

**Requirements -**  

**Business Goals -**   
Litware wants to create a new analytics environment in Azure to meet the following requirements:
See inventory levels across the stores. Data must be updated as close to real time as possible.
Execute ad hoc analytical queries on historical data to identify whether the loyalty club discounts increase sales of the discounted products.
Every four hours, notify store employees about how many prepared food items to produce based on historical demand from the sales data.

**Technical Requirements -**  
Litware identifies the following technical requirements:
Minimize the number of different Azure services needed to achieve the business goals.
Use platform as a service (PaaS) offerings whenever possible and avoid having to provision virtual machines that must be managed by Litware.
Ensure that the analytical data store is accessible only to the company's on-premises network and Azure services.
Use Azure Active Directory (Azure AD) authentication whenever possible.
Use the principle of least privilege when designing security.
Stage Inventory data in Azure Data Lake Storage Gen2 before loading the data into the analytical data store. Litware wants to remove transient data from Data
Lake Storage once the data is no longer in use. Files that have a modified date that is older than 14 days must be removed.
Limit the business analysts' access to customer contact information, such as phone numbers, because this type of data is not analytically relevant.
Ensure that you can quickly restore a copy of the analytical data store within one hour in the event of corruption or accidental deletion.

**Planned Environment -**  
Litware plans to implement the following environment:
The application development team will create an Azure event hub to receive real-time sales data, including store number, date, time, product ID, customer loyalty number, price, and discount amount, from the point of sale (POS) system and output the data to data storage in Azure.
Customer data, including name, contact information, and loyalty number, comes from Salesforce, a SaaS application, and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Product data, including product ID, name, and category, comes from Salesforce and can be imported into Azure once every eight hours. Row modified dates are not trusted in the source table.
Daily inventory data comes from a Microsoft SQL server located on a private network.
Litware currently has 5 TB of historical sales data and 100 GB of customer data. The company expects approximately 100 GB of new data per month for the next year.
Litware will build a custom application named FoodPrep to provide store employees with the calculation results of how many prepared food items to produce every four hours.
Litware does not plan to implement Azure ExpressRoute or a VPN between the on-premises network and Azure.

**Question  
What should you do to improve high availability of the real-time data processing solution?**

1. A. Deploy a High Concurrency Databricks cluster.
2. B. Deploy an Azure Stream Analytics job and use an Azure Automation runbook to check the status of the job and to start the job if it stops.
3. C. Set Data Lake Storage to use geo-redundant storage (GRS).
4. D. Deploy identical Azure Stream Analytics jobs to paired regions in Azure.

:::tip Answer
D
:::
