const roles = [
  {
    name: 'Super Admin',
    description:
      'Super Admins can access and manage all features and settings.',
    type: 'SUPER_ADMIN',
  },
  {
    name: 'Author',
    description: 'Authors can manage the content they have created.',
    type: 'AUTHOR',
  },
  {
    name: 'Editor',
    description:
      'Editors can manage and publish contents including those of other users.',
    type: 'EDITOR',
  },
  {
    name: 'Public',
    description: 'Default role given to unauthenticated user.',
    type: 'PUBLIC',
  },
  {
    name: 'Authenticated',
    description: 'Default role given to authenticated user.',
    type: 'AUTHENTICATED',
  },
]

const users = [
  {
    name: "Wasique Haider",
    email: "wasique@info.com",
    password: "123456",
    confirmed: true,
    blocked: false,
  },
  {
    name: "John Smith",
    email: "johnsmith@tgu.com",
    password: "1998TGU89170",
    confirmed: true,
    blocked: false,
  },
  {
    name: "Jane Doe",
    email: "janedoe@tgu.com",
    password: "1999TGU67423",
    confirmed: true,
    blocked: false,
  },
  {
    name: "Tom Brown",
    email: "tombrown@tgu.com",
    password: "1997TGU23409",
    confirmed: true,
    blocked: false,
  },
  {
    name: "Sarah Lee",
    email: "sarahlee@tgu.com",
    password: "1998TGU77216",
    confirmed: true,
    blocked: false,
  },
  {
    name: "David Kim",
    email: "davidkim@tgu.com",
    password: "1999TGU51238",
    confirmed: true,
    blocked: false,
  },
];

const studentProfiles = [
  {
    "stdId": "TGU89170",
    "firstName": "Wasique",
    "lastName": "Haider",
    "gender": "Male",
    "DOB": "11/17/1996",
    "email": "wasique@info.com",
    "phone": "(123) 456-7890",
    "mailingAddress": "1115 E 58th St, Chicago, IL 60637",
    "programOfStudy": "Master of Science in Data Science",
    "studentStatus": "Active",
    "residence": "Residential",
    "advisor": "Dr. Rachel Nguyen",
    "permanentAddress": "1565 Oak Street, Wichita, KS 67211",
    "password": "1998TGU89170",
    "currentGPA": 3.8,
    "academicLevel": "Graduate",
    "concentration": "Machine Learning",
    "college": "School of Data Science and Analytics",
    "graduationDate": "05/18/2024"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "gender": "Male",
    "DOB": "05/17/1998",
    "email": "johnsmith@tgu.com",
    "phone": "(123) 456-7890",
    "mailingAddress": "1115 E 58th St, Chicago, IL 60637",
    "programOfStudy": "Master of Science in Data Analytics",
    "studentStatus": "Active",
    "residence": "Residential",
    "advisor": "Dr. Rachel Nguyen",
    "permanentAddress": "1565 Oak Street, Wichita, KS 67211",
    "password": "1998TGU89170",
    "currentGPA": 3.8,
    "academicLevel": "Graduate",
    "concentration": "Machine Learning",
    "college": "School of Data Science and Analytics",
    "graduationDate": "05/18/2024"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "gender": "Female",
    "DOB": "02/14/1999",
    "email": "janedoe@tgu.com",
    "phone": "(234) 567-8901",
    "mailingAddress": "950 E 61st St, Chicago, IL 60637",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "studentStatus": "Active",
    "residence": "Residential",
    "advisor": "Prof. David Patel",
    "permanentAddress": "2373 Lincoln Street, Denver, CO 80205",
    "password": "1999TGU67423",
    "currentGPA": 3.95,
    "academicLevel": "Graduate",
    "concentration": "Water Resource Management",
    "college": "School of Environmental and Sustainable Engineering",
    "graduationDate": "06/02/2024"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "gender": "Male",
    "DOB": "09/03/1997",
    "email": "tombrown@tgu.com",
    "phone": "(345) 678-9012",
    "mailingAddress": "1200 W Adams St, Chicago, IL 60607",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "studentStatus": "Active",
    "residence": "Commuter",
    "advisor": "Dr. Julia Hernandez",
    "permanentAddress": "401 Main Street, Louisville, KY 40202",
    "password": "1997TGU23409",
    "currentGPA": 3.63,
    "academicLevel": "Graduate",
    "concentration": "Fiction Writing",
    "college": "School of Writing and Literature",
    "graduationDate": "06/22/2024"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "gender": "Female",
    "DOB": "11/21/1998",
    "email": "sarahlee@tgu.com",
    "phone": "(456) 789-0123",
    "mailingAddress": "3232 N Halsted St, Chicago, IL 60657",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "studentStatus": "Active",
    "residence": "Commuter",
    "advisor": "Prof. John Kim",
    "permanentAddress": "1452 5th Avenue, San Francisco, CA 94122",
    "password": "1998TGU77216",
    "currentGPA": 3.71,
    "academicLevel": "Graduate",
    "concentration": "Educational Leadership",
    "college": "School of Education and Learning",
    "graduationDate": "07/10/2024"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "gender": "Male",
    "DOB": "06/30/1999",
    "email": "davidkim@tgu.com",
    "phone": "(567) 890-1234",
    "mailingAddress": "1025 E 58th St, Chicago, IL 60637",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "studentStatus": "Active",
    "residence": "Residential",
    "advisor": "Dr. Sarah Singh",
    "permanentAddress": "7124 Maple Avenue, Cleveland, OH 44103",
    "password": "1999TGU51238",
    "currentGPA": 3.87,
    "academicLevel": "Graduate",
    "concentration": "Health Informatics",
    "college": "School of Public Health and Policy",
    "graduationDate": "08/16/2024"
  }
]

const profile = {
  stdId:"TGU456235",
  program:"Computer Science MS",
  status:true,
  residence:"Commuter",
  advisor:"Elon Musk",
  phone: '123-456-7890',
  mailAddress:"158 N SCOTT STREET, JOLIET IL 60432",
  address: '380 WESTMINSTER ST, PROVIDENCE RI 02903',
  email:"johnsmith@thegreatuniversity.edu",
  image: 'https://github.com/ahmaat19.png',
  bio: 'Full Stack Developer',
}

const clientPermissions = [
  {
    name: 'Home',
    path: '/',
    menu: 'hidden',
    auth: true,
    description: 'Home page',
  },
  {
    name: 'Users',
    path: '/admin/auth/users',
    menu: 'admin',
    auth: true,
    description: 'Users page',
  },
  {
    name: 'Roles',
    path: '/admin/auth/roles',
    menu: 'admin',
    auth: true,
    description: 'Roles page',
  },
  {
    name: 'Profile',
    path: '/account/profile',
    menu: 'profile',
    auth: true,
    description: 'Profile page',
  },
  {
    name: 'RequestDocument',
    path: '/account/requestdocument',
    menu: 'hidden',
    auth: true,
    description: 'Request Document page',
  },
  {
    name: 'MyAcademics',
    path: '/account/academics',
    menu: 'hidden',
    auth: true,
    description: 'My Academics page',
  },
  {
    name: 'StaffDirectory',
    path: '/account/staffdirectory',
    menu: 'hidden',
    auth: true,
    description: 'Staff Directory page',
  },
  {
    name: 'LibraryServices',
    path: '/account/library',
    menu: 'hidden',
    auth: true,
    description: 'Library Services page',
  },
  {
    name: 'Permissions',
    path: '/admin/auth/permissions',
    menu: 'admin',
    auth: true,
    description: 'Permissions page',
  },
  {
    name: 'Client Permissions',
    path: '/admin/auth/client-permissions',
    menu: 'admin',
    auth: true,
    description: 'Client Permissions page',
  },
  {
    name: 'User Roles',
    path: '/admin/auth/user-roles',
    menu: 'admin',
    auth: true,
    description: 'User Roles page',
  },
  {
    name: 'User Profiles',
    path: '/admin/auth/user-profiles',
    menu: 'admin',
    auth: true,
    description: 'User Profiles page',
  },
]

const permissions = [
  {
    description: 'Get All Users',
    route: '/api/auth/users',
    auth: true,
    name: 'Users',
    method: 'GET',
  },
  {
    description: 'Get User By Id',
    route: '/api/auth/users/:id',
    auth: true,
    name: 'Users',
    method: 'GET',
  },
  {
    description: 'Create User',
    route: '/api/auth/users',
    auth: true,
    name: 'Users',
    method: 'POST',
  },
  {
    description: 'Update User',
    route: '/api/auth/users/:id',
    auth: true,
    name: 'Users',
    method: 'PUT',
  },
  {
    description: 'Delete User',
    route: '/api/auth/users/:id',
    auth: true,
    name: 'Users',
    method: 'DELETE',
  },
  {
    description: 'Login',
    route: '/api/auth/login',
    auth: false,
    name: 'Login',
    method: 'POST',
  },
  {
    description: 'Forgot Password',
    route: '/api/auth/forgot-password',
    auth: false,
    name: 'Forgot Password',
    method: 'POST',
  },
  {
    description: 'Reset Password',
    route: '/api/auth/reset-password',
    auth: false,
    name: 'Reset Password',
    method: 'POST',
  },
  {
    description: 'Get All Students Payments',
    route: '/api/auth/payments',
    auth: true,
    name: 'Student Payments',
    method: 'POST',
  },
  {
    description: 'Get All Students Academics',
    route: '/api/auth/academics',
    auth: true,
    name: 'Student Academics',
    method: 'POST',
  },
  {
    description: 'Get All Faculties',
    route: '/api/auth/faculties',
    auth: true,
    name: 'Faculties',
    method: 'GET',
  },
  {
    description: 'Get All Books',
    route: '/api/auth/books',
    auth: true,
    name: 'Books and Journals',
    method: 'GET',
  },
  {
    description: 'Get All User Profiles',
    route: '/api/auth/user-profiles',
    auth: true,
    name: 'User Profiles',
    method: 'GET',
  },
  {
    description: 'Get Profile',
    route: '/api/auth/profile',
    auth: true,
    name: 'User Profile',
    method: 'GET',
  },
  {
    description: 'Update Profile',
    route: '/api/auth/profile',
    auth: true,
    name: 'User Profile',
    method: 'POST',
  },
  {
    description: 'Get All Roles',
    route: '/api/auth/roles',
    auth: true,
    name: 'Roles',
    method: 'GET',
  },
  {
    description: 'Create Role',
    route: '/api/auth/roles',
    auth: true,
    name: 'Roles',
    method: 'POST',
  },
  {
    description: 'Update Role',
    route: '/api/auth/roles/:id',
    auth: true,
    name: 'Roles',
    method: 'PUT',
  },
  {
    description: 'Delete Role',
    route: '/api/auth/roles/:id',
    auth: true,
    name: 'Roles',
    method: 'DELETE',
  },
  {
    description: 'Get All Permissions',
    route: '/api/auth/permissions',
    auth: true,
    name: 'Permissions',
    method: 'GET',
  },
  {
    description: 'Create Permission',
    route: '/api/auth/permissions',
    auth: true,
    name: 'Permissions',
    method: 'POST',
  },
  {
    description: 'Update Permission',
    route: '/api/auth/permissions/:id',
    auth: true,
    name: 'Permissions',
    method: 'PUT',
  },
  {
    description: 'Delete Permission',
    route: '/api/auth/permissions/:id',
    auth: true,
    name: 'Permissions',
    method: 'DELETE',
  },
  {
    description: 'Get All User Roles',
    route: '/api/auth/user-roles',
    auth: true,
    name: 'User Roles',
    method: 'GET',
  },
  {
    description: 'Get User Roles By Id With POST',
    route: '/api/auth/user-roles/:id',
    auth: false,
    name: 'User Roles',
    method: 'POST',
  },
  {
    description: 'Create User Role',
    route: '/api/auth/user-roles',
    auth: true,
    name: 'User Roles',
    method: 'POST',
  },
  {
    description: 'Update User Role',
    route: '/api/auth/user-roles/:id',
    auth: true,
    name: 'User Roles',
    method: 'PUT',
  },
  {
    description: 'Delete User Role',
    route: '/api/auth/user-roles/:id',
    auth: true,
    name: 'User Roles',
    method: 'DELETE',
  },
  {
    description: 'Get All ClientPermissions',
    route: '/api/auth/client-permissions',
    auth: true,
    name: 'ClientPermissions',
    method: 'GET',
  },
  {
    description: 'Create Permission',
    route: '/api/auth/client-permissions',
    auth: true,
    name: 'ClientPermissions',
    method: 'POST',
  },
  {
    description: 'Update Permission',
    route: '/api/auth/client-permissions/:id',
    auth: true,
    name: 'ClientPermissions',
    method: 'PUT',
  },
  {
    description: 'Delete Permission',
    route: '/api/auth/client-permissions/:id',
    auth: true,
    name: 'ClientPermissions',
    method: 'DELETE',
  },
]

const booksAndJournals = [
  {
    "bookId": "BPR735",
    "bookType": "Books",
    "bookDetails": "\"Python for Data Analysis\" by Wes McKinney (2012, O'Reilly Media)",
    "subject": "Data Analytics"
  },
  {
    "bookId": "BWX980",
    "bookType": "Books",
    "bookDetails": "\"Data Science for Business\" by Foster Provost and Tom Fawcett (2013, O'Reilly Media)",
    "subject": "Data Analytics"
  },
  {
    "bookId": "BYF278",
    "bookType": "Books",
    "bookDetails": "\"Data Analytics Made Accessible\" by Anil Maheshwari (2019, Apress)",
    "subject": "Data Analytics"
  },
  {
    "bookId": "BKT506",
    "bookType": "Books",
    "bookDetails": "\"Hands-On Machine Learning with Scikit-Learn and TensorFlow\" by Aurélien Géron (2017, O'Reilly Media)",
    "subject": "Data Analytics"
  },
  {
    "bookId": "BHZ631",
    "bookType": "Books",
    "bookDetails": "\"Data Mining: Concepts and Techniques\" by Jiawei Han and Micheline Kamber (2000, Morgan Kaufmann)",
    "subject": "Data Analytics"
  },
  {
    "bookId": "JNL754",
    "bookType": "Journals",
    "bookDetails": "\"Machine Learning and Predictive Analytics for Healthcare\" in Journal of Healthcare Informatics Research, Volume 5, Issue 1, 2021",
    "subject": "Data Analytics"
  },
  {
    "bookId": "JNL289",
    "bookType": "Journals",
    "bookDetails": "\"Big Data Analytics and Cybersecurity\" in Journal of Cybersecurity and Information Management, Volume 1, Issue 2, 2021",
    "subject": "Data Analytics"
  },
  {
    "bookId": "JNL916",
    "bookType": "Journals",
    "bookDetails": "\"Natural Language Processing and Text Analytics\" in ACM Transactions on Information Systems, Volume 39, Issue 4, 2021",
    "subject": "Data Analytics"
  },
  {
    "bookId": "JNL503",
    "bookType": "Journals",
    "bookDetails": "\"Data Mining and Analytics in Business Intelligence\" in Journal of Business Research, Volume 131, 2021",
    "subject": "Data Analytics"
  },
  {
    "bookId": "JNL642",
    "bookType": "Journals",
    "bookDetails": "\"Advanced Analytics and Visualization for Climate Data\" in Journal of Climate, Volume 34, Issue 8, 2021",
    "subject": "Data Analytics"
  },
  {
    "bookId": "BMR397",
    "bookType": "Books",
    "bookDetails": "\"Sustainability and Environmental Engineering\" by Susan E. Powers and Thomas F. Theis (2018, Wiley)",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "BGT621",
    "bookType": "Books",
    "bookDetails": "\"Environmental Engineering: Fundamentals, Sustainability, Design\" by James R. Mihelcic and Julie B. Zimmerman (2018, Wiley)",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "BMQ948",
    "bookType": "Books",
    "bookDetails": "\"Air Pollution Engineering Manual\" by Wayne T. Davis (2012, Wiley)",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "BFD739",
    "bookType": "Books",
    "bookDetails": "\"Handbook of Environmental Engineering\" by Myer Kutz (2019, McGraw-Hill Education)",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "BNK562",
    "bookType": "Books",
    "bookDetails": "\"Water and Wastewater Engineering\" by Mackenzie L. Davis and David A. Cornwell (2011, McGraw-Hill Education)",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "JNL129",
    "bookType": "Journals",
    "bookDetails": "\"Sustainable Water Management in Urban Environments\" in Environmental Science & Technology, Volume 55, Issue 2, 2021",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "JNL764",
    "bookType": "Journals",
    "bookDetails": "\"Green Chemistry and Sustainability in Environmental Engineering\" in Journal of Environmental Engineering, Volume 147, Issue 4, 2021",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "JNL936",
    "bookType": "Journals",
    "bookDetails": "\"Innovations in Bioremediation and Environmental Restoration\" in Environmental Science: Processes & Impacts, Volume 23, Issue 1, 2021",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "JNL573",
    "bookType": "Journals",
    "bookDetails": "\"Advances in Environmental Monitoring and Assessment\" in Environmental Monitoring and Assessment, Volume 193, Issue 10, 2021",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "JNL248",
    "bookType": "Journals",
    "bookDetails": "\"Integrated Approaches to Environmental Modeling and Analysis\" in Environmental Modelling & Software, Volume 141, 2021",
    "subject": "Environmental Engineering"
  },
  {
    "bookId": "BGM872",
    "bookType": "Books",
    "bookDetails": "\"On Writing: A Memoir of the Craft\" by Stephen King (2000, Scribner)",
    "subject": "Creative Writing"
  },
  {
    "bookId": "BZH469",
    "bookType": "Books",
    "bookDetails": "\"The Elements of Style\" by William Strunk Jr. and E.B. White (1959, Pearson)",
    "subject": "Creative Writing"
  },
  {
    "bookId": "BJK701",
    "bookType": "Books",
    "bookDetails": "\"Bird by Bird: Some Instructions on Writing and Life\" by Anne Lamott (1994, Anchor Books)",
    "subject": "Creative Writing"
  },
  {
    "bookId": "BXD154",
    "bookType": "Books",
    "bookDetails": "\"The Writing Life\" by Annie Dillard (1989, HarperCollins)",
    "subject": "Creative Writing"
  },
  {
    "bookId": "BQT983",
    "bookType": "Books",
    "bookDetails": "\"The War of Art: Break Through the Blocks and Win Your Inner Creative Battles\" by Steven Pressfield (2002, Black Irish Entertainment LLC)",
    "subject": "Creative Writing"
  },
  {
    "bookId": "JNL835",
    "bookType": "Journals",
    "bookDetails": "The Power of Narrative in Creative Writing in The Writer's Chronicle, Volume 53, Issue 3, 2021",
    "subject": "Creative Writing"
  },
  {
    "bookId": "JNL416",
    "bookType": "Journals",
    "bookDetails": "The Craft of Writing Fiction in The Paris Review, Volume 237, Spring 2021",
    "subject": "Creative Writing"
  },
  {
    "bookId": "JNL791",
    "bookType": "Journals",
    "bookDetails": "Exploring the Intersection of Creative Writing and Social Justice in The Journal of Creative Writing Studies, Volume 5, Issue 1, 2020",
    "subject": "Creative Writing"
  },
  {
    "bookId": "JNL573",
    "bookType": "Journals",
    "bookDetails": "The Art of Poetry: Inspiration, Technique, and Form in Poets & Writers, Volume 49, Issue 5, September/October 2021",
    "subject": "Creative Writing"
  },
  {
    "bookId": "JNL204",
    "bookType": "Journals",
    "bookDetails": "New Directions in Creative Nonfiction Writing in Creative Nonfiction, Issue 74, 2021",
    "subject": "Creative Writing"
  },
  {
    "bookId": "BXT219",
    "bookType": "Books",
    "bookDetails": "\"Understanding by Design\" by Grant Wiggins and Jay McTighe (2005, Association for Supervision and Curriculum Development)",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "BKP983",
    "bookType": "Books",
    "bookDetails": "\"Curriculum: From Theory to Practice\" by Wesley Null (2016, Rowman & Littlefield Publishers)",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "BFH536",
    "bookType": "Books",
    "bookDetails": "\"Curriculum Planning: A Handbook for Professionals\" by Forrest W. Parkay (2016, Pearson)",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "BMD712",
    "bookType": "Books",
    "bookDetails": "\"Curriculum 21: Essential Education for a Changing World\" by Heidi Hayes Jacobs (2010, ASCD)",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "BZL658",
    "bookType": "Books",
    "bookDetails": "\"Teaching the Common Core: Lesson Plans and Strategies\" by Jeremy S. Hyler and Troy Hicks (2013, Routledge)",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "JNL439",
    "bookType": "Journals",
    "bookDetails": "\"Teaching Ethics in the Age of Technology\" in Journal of Curriculum and Instruction, Volume 9, Issue 2, 2020",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "JNL768",
    "bookType": "Journals",
    "bookDetails": "\"The Role of Teachers in Curriculum Development\" in Curriculum and Teaching Dialogue, Volume 20, Issue 1, 2018",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "JNL102",
    "bookType": "Journals",
    "bookDetails": "\"Multimodal Literacy and Pedagogy in Early Childhood Education\" in Journal of Early Childhood Education, Volume 44, Issue 4, 2016",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "JNL605",
    "bookType": "Journals",
    "bookDetails": "\"Assessing Students' Understanding in Mathematics: A Conceptual Framework for Curriculum and Instruction\" in Journal for Research in Mathematics Education, Volume 50, Issue 5, 2019",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "JNL297",
    "bookType": "Journals",
    "bookDetails": "\"Designing Culturally Responsive Mathematics Curriculum and Instruction for Latino/a Students\" in Journal of Latinos and Education, Volume 15, Issue 2, 2016",
    "subject": "Curriculum and Instruction"
  },
  {
    "bookId": "BXK832",
    "bookType": "Books",
    "bookDetails": "\"The Healthcare Executive's Guide to Emergency Department Management\" by Tamara A. Gilliam and Jonathan S. Jones (2019, CRC Press)",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "BLC256",
    "bookType": "Books",
    "bookDetails": "\"Strategic Management of Healthcare Organizations\" by Linda E. Swayne, W. Jack Duncan, and Peter M. Ginter (2018, Wiley)",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "BPH941",
    "bookType": "Books",
    "bookDetails": "\"Healthcare Management: An Introduction\" by Sharon B. Buchbinder and Nancy H. Shanks (2019, Jones & Bartlett Learning)",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "BDT679",
    "bookType": "Books",
    "bookDetails": "\"Healthcare Financial Management: Introduction to Accounting and Financial Management\" by Louis C. Gapenski and Kristin L. Reiter (2017, Health Administration Press)",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "BZX502",
    "bookType": "Books",
    "bookDetails": "\"Global Health: An Introduction to Current and Future Trends\" by Kevin McCracken and David R. Phillips (2017, Routledge)",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "JNL589",
    "bookType": "Journals",
    "bookDetails": "\"Health Equity and Access in the Digital Age\" in Journal of Health Care for the Poor and Underserved, Volume 32, Issue 2, 2021",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "JTX461",
    "bookType": "Journals",
    "bookDetails": "\"Innovations in Health Management and Policy\" in Journal of Healthcare Management, Volume 63, Issue 3, 2018",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "JFP902",
    "bookType": "Journals",
    "bookDetails": "\"The Future of Healthcare Leadership\" in Journal of Healthcare Leadership, Volume 12, 2020",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "JDT345",
    "bookType": "Journals",
    "bookDetails": "\"Promoting Health Equity in Communities\" in Journal of Public Health Management and Practice, Volume 27, Issue 1, 2021",
    "subject": " Health Policy and Management"
  },
  {
    "bookId": "JNM786",
    "bookType": "Journals",
    "bookDetails": "\"The Role of Technology in Health Policy and Management\" in Health Affairs, Volume 39, Issue 2, 2020",
    "subject": " Health Policy and Management"
  }
]

const faculties = [
  {
    "facultyName": "Sarah Smith",
    "researchArea": "Machine Learning",
    "designation": "Associate Prof.",
    "college": "School of Data Science and Analytics",
    "officeLocation": "Smith Hall 321",
    "email": "sarah.smith@tgu.com",
    "phone": "(123) 456-7890"
  },
  {
    "facultyName": "John Lee",
    "researchArea": "Natural Language Processing",
    "designation": "Assistant Prof.",
    "college": "School of Data Science and Analytics",
    "officeLocation": "Smith Hall 212",
    "email": "john.lee@tgu.com",
    "phone": "(234) 567-8901"
  },
  {
    "facultyName": "Emily Chen",
    "researchArea": "Data Visualization",
    "designation": "Professor",
    "college": "School of Data Science and Analytics",
    "officeLocation": "Smith Hall 102",
    "email": "emily.chen@tgu.com",
    "phone": "(345) 678-9012"
  },
  {
    "facultyName": "Michael Kim",
    "researchArea": "Data Mining",
    "designation": "Professor",
    "college": "School of Data Science and Analytics",
    "officeLocation": "Smith Hall 304",
    "email": "michael.kim@tgu.com",
    "phone": "(456) 789-0123"
  },
  {
    "facultyName": "Lisa Wong",
    "researchArea": "Artificial Intelligence",
    "designation": "Associate Prof.",
    "college": "School of Data Science and Analytics",
    "officeLocation": "Smith Hall 101",
    "email": "lisa.wong@tgu.com",
    "phone": "(567) 890-1234"
  },
  {
    "facultyName": "Isabella Nguyen",
    "researchArea": "Water resources",
    "designation": "Professor",
    "college": "School of Environmental and Sustainable Engineering",
    "officeLocation": "Lee Hall 4351",
    "email": "i.nguyen@tgu.com",
    "phone": "(123) 456-7890"
  },
  {
    "facultyName": "James Kim",
    "researchArea": "Environmental health",
    "designation": "Associate Professor",
    "college": "School of Environmental and Sustainable Engineering",
    "officeLocation": "Lee Hall 6892",
    "email": "j.kim@tgu.com",
    "phone": "(234) 567-8901"
  },
  {
    "facultyName": "Rachel Lee",
    "researchArea": "Climate change",
    "designation": "Assistant Professor",
    "college": "School of Environmental and Sustainable Engineering",
    "officeLocation": "Lee Hall 9475",
    "email": "r.lee@tgu.com",
    "phone": "(345) 678-9012"
  },
  {
    "facultyName": "Brandon Hernandez",
    "researchArea": "Sustainable design",
    "designation": "Professor",
    "college": "School of Environmental and Sustainable Engineering",
    "officeLocation": "Lee Hall 2789",
    "email": "b.hernandez@tgu.com",
    "phone": "(456) 789-0123"
  },
  {
    "facultyName": "Laura Lee",
    "researchArea": "Air quality",
    "designation": "Associate Professor",
    "college": "School of Environmental and Sustainable Engineering",
    "officeLocation": "Lee Hall 5091",
    "email": "l.lee@tgu.com",
    "phone": "(567) 890-1234"
  },
  {
    "facultyName": "Maria Rodriguez",
    "researchArea": "Poetry, Fiction",
    "designation": "Professor",
    "college": "School of Writing and Literature",
    "officeLocation": "Chen Hall 5234",
    "email": "mrodriguez@tgu.com",
    "phone": "(123) 456-7890"
  },
  {
    "facultyName": "John Thompson",
    "researchArea": "Screenwriting, Playwriting",
    "designation": "Associate Professor",
    "college": "School of Writing and Literature",
    "officeLocation": "Chen Hall 1103",
    "email": "jthompson@tgu.com",
    "phone": "(234) 567-8901"
  },
  {
    "facultyName": "Emily Kim",
    "researchArea": "Creative Nonfiction",
    "designation": "Assistant Professor",
    "college": "School of Writing and Literature",
    "officeLocation": "Chen Hall 3312",
    "email": "ekim@tgu.com",
    "phone": "(345) 678-9012"
  },
  {
    "facultyName": "David Lee",
    "researchArea": "Fiction, Translation",
    "designation": "Professor",
    "college": "School of Writing and Literature",
    "officeLocation": "Chen Hall 2245",
    "email": "dlee@tgu.com",
    "phone": "(456) 789-0123"
  },
  {
    "facultyName": "Sarah Baker",
    "researchArea": "Poetry, Screenwriting",
    "designation": "Professor",
    "college": "School of Writing and Literature",
    "officeLocation": "Chen Hall 4456",
    "email": "sbaker@tgu.com",
    "phone": "(567) 890-1234"
  },
  {
    "facultyName": "Michelle Johnson",
    "researchArea": "Curriculum Development",
    "designation": "Associate Professor",
    "college": "School of Education and Learning",
    "officeLocation": "Kim Hall 302",
    "email": "m.johnson@tgu.com",
    "phone": "(555) 555-1111"
  },
  {
    "facultyName": "Sarah Lee",
    "researchArea": "Teacher Education",
    "designation": "Professor",
    "college": "School of Education and Learning",
    "officeLocation": "Kim Hall 201",
    "email": "s.lee@tgu.com",
    "phone": "(555) 555-2222"
  },
  {
    "facultyName": "David Kim",
    "researchArea": "Educational Psychology",
    "designation": "Assistant Professor",
    "college": "School of Education and Learning",
    "officeLocation": "Kim Hall 305",
    "email": "d.kim@tgu.com",
    "phone": "(555) 555-3333"
  },
  {
    "facultyName": "Amanda Brown",
    "researchArea": "Multicultural Education",
    "designation": "Associate Professor",
    "college": "School of Education and Learning",
    "officeLocation": "Kim Hall 405",
    "email": "a.brown@tgu.com",
    "phone": "(555) 555-4444"
  },
  {
    "facultyName": "John Smith",
    "researchArea": "Assessment",
    "designation": "Professor Emeritus",
    "college": "School of Education and Learning",
    "officeLocation": "Kim Hall 101",
    "email": "j.smith@tgu.com",
    "phone": "(555) 555-5555"
  },
  {
    "facultyName": "Karen Lee",
    "researchArea": "Health Economics",
    "designation": "Professor",
    "college": "School of Public Health and Policy",
    "officeLocation": "Wong Hall 2072",
    "email": "karen.lee@tgu.com",
    "phone": "(123) 456-7890"
  },
  {
    "facultyName": "James Kim",
    "researchArea": "Health Services",
    "designation": "Associate Professor",
    "college": "School of Public Health and Policy",
    "officeLocation": "Wong Hall 3050",
    "email": "james.kim@tgu.com",
    "phone": "(234) 567-8901"
  },
  {
    "facultyName": "Sarah Wong",
    "researchArea": "Healthcare Management",
    "designation": "Assistant Professor",
    "college": "School of Public Health and Policy",
    "officeLocation": "Wong Hall 1101",
    "email": "sarah.wong@tgu.com",
    "phone": "(345) 678-9012"
  },
  {
    "facultyName": "Michael Chen",
    "researchArea": "Health Informatics",
    "designation": "Professor",
    "college": "School of Public Health and Policy",
    "officeLocation": "Wong Hall 4012",
    "email": "michael.chen@tgu.com",
    "phone": "(456) 789-0123"
  },
  {
    "facultyName": "Jennifer Zhang",
    "researchArea": "Global Health",
    "designation": "Associate Professor",
    "college": "School of Public Health and Policy",
    "officeLocation": "Wong Hall 1002",
    "email": "jennifer.zhang@tgu.com",
    "phone": "(567) 890-1234"
  }
]

const transcripts = [
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "mailingAddress": "1115 E 58th St, Chicago, IL 60637",
    "transcriptLevel": "Graduate",
    "transcriptType": "Electronic",
    "status": "In Progress"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "mailingAddress": "950 E 61st St, Chicago, IL 60637",
    "transcriptLevel": "Graduate",
    "transcriptType": "Mail",
    "status": "Completed"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "mailingAddress": "1200 W Adams St, Chicago, IL 60607",
    "transcriptLevel": "Graduate",
    "transcriptType": "Mail",
    "status": "In Progress"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "mailingAddress": "3232 N Halsted St, Chicago, IL 60657",
    "transcriptLevel": "Graduate",
    "transcriptType": "Electronic",
    "status": "Completed"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "mailingAddress": "1025 E 58th St, Chicago, IL 60637",
    "transcriptLevel": "Graduate",
    "transcriptType": "Mail",
    "status": "Completed"
  }
]

const payments = [
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Spring 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Spring 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Spring 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 10378,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Spring 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 5000,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Spring 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 11297.25,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Spring 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 11297.25,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Spring 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 0,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Fall 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Fall 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Fall 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 10378,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Fall 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 5000,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Fall 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 11297.25,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Fall 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 5000,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "term": "Fall 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 6297.25,
    "programOfStudy": "Master of Science in Data Analytics"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Spring 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Spring 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Spring 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 5000,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Spring 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 5919.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Spring 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 5919.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Spring 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 5919.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Spring 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 0,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Fall 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Fall 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Fall 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 5000,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Fall 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 5919.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Fall 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 5919.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Fall 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 5919.25,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "term": "Fall 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 0,
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Spring 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Spring 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Spring 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 7834,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Spring 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 7834,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Spring 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 8753.25,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Spring 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 8753.25,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Spring 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 0,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Fall 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Fall 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Fall 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 7834,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Fall 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 6000,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Fall 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 8753.25,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Fall 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 6000,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "term": "Fall 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 2753.25,
    "programOfStudy": "Master of Fine Arts in Creative Writing"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Spring 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Spring 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Spring 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 7834,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Spring 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 7834,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Spring 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 8753.25,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Spring 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 8753.25,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Spring 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 0,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Fall 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Fall 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Fall 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 7834,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Fall 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 7834,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Fall 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 8753.25,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Fall 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 8753.25,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "term": "Fall 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 0,
    "programOfStudy": "Master of Education in Curriculum and Instruction"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Spring 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Spring 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Spring 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 9562,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Spring 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 10481.25,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Spring 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 10481.25,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Spring 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 10481.25,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Spring 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 0,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Fall 2023",
    "detailCode": "INS",
    "description": "Student Insurance",
    "charge": 769.25,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Fall 2023",
    "detailCode": "TFE",
    "description": "Technology Fee",
    "charge": 150,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Fall 2023",
    "detailCode": "GRT",
    "description": "Grad Tuition",
    "charge": 9562,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Fall 2023",
    "detailCode": "PMT",
    "description": "payment",
    "payment": 8000,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Fall 2023",
    "detailCode": "TC",
    "description": "Term Charges",
    "charge": 10481.25,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Fall 2023",
    "detailCode": "TP",
    "description": "Term Payments",
    "payment": 8000,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "term": "Fall 2023",
    "detailCode": "TB",
    "description": "Term Balance",
    "balance": 2481.25,
    "programOfStudy": "Master of Public Health in Health Policy and Management"
  }
]

const academics = [
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA501",
    "courseDescription": "Introduction to Data Analytics",
    "credits": 3,
    "grade": "A-",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA502",
    "courseDescription": "Machine Learning and Statistical Analysis",
    "credits": 3,
    "grade": "B+",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA503",
    "courseDescription": "Data Visualization and Communication",
    "credits": 3,
    "grade": "B",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA504",
    "courseDescription": "Big Data Analytics",
    "credits": 3,
    "grade": "A-",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA505",
    "courseDescription": "Text Mining and Natural Language Processing",
    "credits": 3,
    "grade": "A",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA506",
    "courseDescription": "Time Series Analysis and Forecasting",
    "credits": 3,
    "grade": "B+",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA507",
    "courseDescription": "Data Mining and Pattern Recognition",
    "credits": 3,
    "grade": "A-",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA508",
    "courseDescription": "Web Analytics and Social Media Mining",
    "credits": 3,
    "grade": "B-",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU89170",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@tgu.com",
    "programOfStudy": "Master of Science in Data Analytics",
    "courseCode": "DA509",
    "courseDescription": "Business Analytics and Decision Making",
    "credits": 3,
    "grade": "A",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE501",
    "courseDescription": "Environmental Transport Processes",
    "credits": 3,
    "grade": "A",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE502",
    "courseDescription": "Physical and Chemical Treatment Processes",
    "credits": 3,
    "grade": "A",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE503",
    "courseDescription": "Biological Treatment Processes",
    "credits": 3,
    "grade": "A-",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE504",
    "courseDescription": "Advanced Water and Wastewater Treatment",
    "credits": 3,
    "grade": "A+",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE505",
    "courseDescription": "Air Pollution Control and Management",
    "credits": 3,
    "grade": "A",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE506",
    "courseDescription": "Hazardous Waste Management",
    "credits": 3,
    "grade": "A-",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE507",
    "courseDescription": "Solid Waste Management and Recycling",
    "credits": 3,
    "grade": "A-",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE508",
    "courseDescription": "Sustainable Infrastructure and Green Building Design",
    "credits": 3,
    "grade": "A",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU67423",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@tgu.com",
    "programOfStudy": "Doctor of Philosophy in Environmental Engineering",
    "courseCode": "ENE509",
    "courseDescription": "Environmental Impact Assessment and Management",
    "credits": 3,
    "grade": "A",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW501",
    "courseDescription": "Creative Writing Foundations",
    "credits": 3,
    "grade": "A-",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW502",
    "courseDescription": "Fiction Writing Workshop",
    "credits": 3,
    "grade": "B+",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW503",
    "courseDescription": "Poetry Writing Workshop",
    "credits": 3,
    "grade": "B-",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW504",
    "courseDescription": "Creative Nonfiction Writing",
    "credits": 3,
    "grade": "A",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW505",
    "courseDescription": "Screenwriting and Playwriting",
    "credits": 3,
    "grade": "C+",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW506",
    "courseDescription": "Writing for Children and Young Adults",
    "credits": 3,
    "grade": "A-",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW507",
    "courseDescription": "Writing for Digital Media",
    "credits": 3,
    "grade": "B",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW508",
    "courseDescription": "Experimental Writing",
    "credits": 3,
    "grade": "A-",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU23409",
    "firstName": "Tom",
    "lastName": "Brown",
    "email": "tombrown@tgu.com",
    "programOfStudy": "Master of Fine Arts in Creative Writing",
    "courseCode": "CW509",
    "courseDescription": "Special Topics in Creative Writing",
    "credits": 3,
    "grade": "B+",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI501",
    "courseDescription": "Curriculum Development and Assessment",
    "credits": 3,
    "grade": "B+",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI502",
    "courseDescription": "Instructional Design and Technology",
    "credits": 3,
    "grade": "B-",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI503",
    "courseDescription": "Teacher Leadership and Professional Development",
    "credits": 3,
    "grade": "A-",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI504",
    "courseDescription": "Multicultural Education and Equity",
    "credits": 3,
    "grade": "B",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI505",
    "courseDescription": "Educational Research and Evaluation",
    "credits": 3,
    "grade": "A-",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI506",
    "courseDescription": "Literacy Instruction and Assessment",
    "credits": 3,
    "grade": "C+",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI507",
    "courseDescription": "STEM Education and Innovation",
    "credits": 3,
    "grade": "A-",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI508",
    "courseDescription": "Special Education and Inclusive Practices",
    "credits": 3,
    "grade": "B",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU77216",
    "firstName": "Sarah",
    "lastName": "Lee",
    "email": "sarahlee@tgu.com",
    "programOfStudy": "Master of Education in Curriculum and Instruction",
    "courseCode": "CI509",
    "courseDescription": "Global and International Education",
    "credits": 3,
    "grade": "A-",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM501",
    "courseDescription": "Health Care Delivery Systems",
    "credits": 3,
    "grade": "A-",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM502",
    "courseDescription": "Health Policy Analysis and Advocacy",
    "credits": 3,
    "grade": "B+",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM503",
    "courseDescription": "Health Economics and Financing",
    "credits": 3,
    "grade": "A",
    "term": "Fall 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM504",
    "courseDescription": "Health Care Quality and Performance Improvement",
    "credits": 3,
    "grade": "A-",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM505",
    "courseDescription": "Health Law and Ethics",
    "credits": 3,
    "grade": "A-",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM506",
    "courseDescription": "Public Health Policy and Administration",
    "credits": 3,
    "grade": "A-",
    "term": "Spring 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM507",
    "courseDescription": "Health Informatics and Technology",
    "credits": 3,
    "grade": "B+",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM508",
    "courseDescription": "Leadership and Management in Health Care",
    "credits": 3,
    "grade": "A",
    "term": "Summer 2023"
  },
  {
    "stdId": "TGU51238",
    "firstName": "David",
    "lastName": "Kim",
    "email": "davidkim@tgu.com",
    "programOfStudy": "Master of Public Health in Health Policy and Management",
    "courseCode": "HPM509",
    "courseDescription": "Comparative Health Systems and Policy",
    "credits": 3,
    "grade": "A-",
    "term": "Summer 2023"
  }
]

export { roles, users, profile, studentProfiles, payments, academics, faculties, booksAndJournals, transcripts, permissions, clientPermissions }
