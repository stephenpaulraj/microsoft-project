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
