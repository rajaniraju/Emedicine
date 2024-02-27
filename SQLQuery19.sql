-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE updateMedicine
	-- Add the parameters for the stored procedure here
	@Name NVarChar(100),
	@Manufacturer NVarChar(100),
	@UnitPrice decimal(18,2),
	@Discount decimal(18,2),
	@Quantity int,
	@ExpDate datetime,
	@ImageUrl varchar(100),
	@Status int,
	@ID int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
UPDATE Medicines
SET Name=@Name, Manufacturer=@Manufacturer, UnitPrice=@UnitPrice,Discount=@Discount,Quantity=@Quantity,ExpDate=@ExpDate, ImageUrl=@ImageUrl, Status=@Status
WHERE ID=@ID;
DECLARE @Result VARCHAR (100)
SET @Result='Medicines updated Successfully'
RETURN 
END

