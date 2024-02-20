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
CREATE PROCEDURE sp_addUpdateMedicine 
	-- Add the parameters for the st(ored procedure here
	@Name NVarChar(100),
	@Manufacturer NVarChar(100),
	@UnitPrice decimal(18,2),
	@Discount decimal(18,2),
	@Quantity int,
	@ExpDate datetime,
	@ImageUrl varchar(100),
	@Status int

AS
BEGIN
	INSERT INTO dbo.Medicines (Name,Manufacturer, UnitPrice,Discount,Quantity,ExpDate, ImageUrl, Status) VALUES (@Name,@Manufacturer,@UnitPrice, @Discount, @Quantity, @ExpDate,@ImageUrl, @Status);
	DECLARE @Result VARCHAR (100)
	SET @Result='Medicines Added and updated Successfully'
	RETURN
	
END
GO
