drop table if exists Place;
create table Place(
     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
     curStatus VARCHAR(20), 		-- 9 �������¸�
     telephone VARCHAR(30),	-- 16 ��ȭ��ȣ
     postalCode VARCHAR(20), 	-- 18 �����ȣ
     address VARCHAR(100),	-- 19 ������ ��ü�ּ�
     roadNameAddress VARCHAR(100),	-- 20	���θ� �ּ�
     establishmentName VARCHAR(50)	-- 22 ����ڸ�
);