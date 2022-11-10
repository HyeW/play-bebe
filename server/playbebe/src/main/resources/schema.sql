drop table if exists Place;
create table Place(
     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
     curStatus VARCHAR(20), 		-- 9 영업상태명
     telephone VARCHAR(30),	-- 16 전화번호
     postalCode VARCHAR(20), 	-- 18 우편번호
     address VARCHAR(100),	-- 19 소재지 전체주소
     roadNameAddress VARCHAR(100),	-- 20	도로명 주소
     establishmentName VARCHAR(50)	-- 22 사업자명
);