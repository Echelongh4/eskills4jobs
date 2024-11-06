-- -- INSERT INTO students (studentName, dob, email) VALUES
-- -- ('Kwame Mensah', '1998-06-15', 'kwame.mensah@example.com'),
-- -- ('Ama Owusu', '2001-04-22', 'ama.owusu@example.com'),
-- -- ('Kojo Asante', '1999-09-10', 'kojo.asante@example.com'),
-- -- ('Efua Adjei', '2000-12-05', 'efua.adjei@example.com'),
-- -- ('Yaw Boateng', '2002-03-18', 'yaw.boateng@example.com');

-- INSERT INTO instructors (instructorName, department, email) VALUES
-- ('Kofi Appiah', 'Computer Science', 'kofi.appiah@example.com'),
-- ('Akosua Mensa', 'Mathematics', 'akosua.mensa@example.com'),
-- ('Kwesi Antwi', 'Physics', 'kwesi.antwi@example.com'),
-- ('Adjoa Baah', 'Chemistry', 'adjoa.baah@example.com'),
-- ('Nana Osei', 'Biology', 'nana.osei@example.com');

-- INSERT INTO instructors (instructorName, department, email) VALUES
-- ('Kofi Appiah', 'Computer Science', 'kofi.appiah@example.com'),
-- ('Akosua Mensa', 'Mathematics', 'akosua.mensa@example.com'),
-- ('Kwesi Antwi', 'Physics', 'kwesi.antwi@example.com'),
-- ('Adjoa Baah', 'Chemistry', 'adjoa.baah@example.com'),
-- ('Nana Osei', 'Biology', 'nana.osei@example.com');


-- INSERT INTO courses (course_name, course_description, credit_hours) VALUES
-- ('Introduction to Programming', 'Basic concepts in programming using Python.', 3),
-- ('Calculus I', 'Fundamentals of calculus including limits, derivatives, and integrals.', 4),
-- ('Physics I', 'Introduction to mechanics, heat, and sound.', 3),
-- ('Organic Chemistry', 'Study of carbon compounds and their reactions.', 4),
-- ('Biology I', 'Introduction to the study of living organisms and life processes.', 3);



-- INSERT INTO classes (course_id, instructor_id, semester, schedule) VALUES
-- (1, 1, '2024 Fall', 'Mon/Wed 10:00-11:30 AM'),
-- (2, 2, '2024 Fall', 'Tue/Thu 9:00-10:30 AM'),
-- (3, 3, '2024 Fall', 'Mon/Wed 1:00-2:30 PM'),
-- (4, 4, '2024 Fall', 'Tue/Thu 11:00-12:30 PM'),
-- (5, 5, '2024 Fall', 'Mon/Wed 3:00-4:30 PM');

-- ALTER TABLE classes ADD COLUMN schedule VARCHAR(50) AFTER semester;

INSERT INTO enrollment (student_id, course_id, enrollment_date) VALUES
(1, 1, '2024-08-20'),
(2, 1, '2024-08-21'),
(3, 2, '2024-08-22'),
(4, 3, '2024-08-23'),
(5, 4, '2024-08-24'),
(1, 5, '2024-08-25'),
(2, 3, '2024-08-26'),
(3, 4, '2024-08-27'),
(4, 5, '2024-08-28'),
(5, 2, '2024-08-29');
