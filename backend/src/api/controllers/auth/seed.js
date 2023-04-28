import User from '../../models/User.js'
import Books from '../../models/Books.js'
import Faculties from '../../models/Faculties.js'
import Profile from '../../models/Profile.js'
import Transcripts from '../../models/Transcripts.js'
import Payments from '../../models/Payments.js'
import Academics from '../../models/Academics.js'
import Role from '../../models/Role.js'
import Permission from '../../models/Permission.js'
import UserRole from '../../models/UserRole.js'
import ClientPermission from '../../models/ClientPermission.js'
import {
  users,
  studentProfiles,
  booksAndJournals,
  profile,
  roles,
  permissions,
  clientPermissions,
  faculties,
  transcripts,
  payments,
  academics
} from '../../../config/data.js'

const secret = 'js'

export const seed = async (req, res) => {
  try {
    if (!req.query.secret || req.query.secret !== secret)
      return res.status(401).json({ error: "Unauthorized" });

    // Delete all existing data
    await User.deleteMany({});
    await Books.deleteMany({});
    await Faculties.deleteMany({});
    await Profile.deleteMany({});
    await Transcripts.deleteMany({});
    await Payments.deleteMany({});
    await Academics.deleteMany({});
    await Role.deleteMany({});
    await Permission.deleteMany({});
    await UserRole.deleteMany({});
    await ClientPermission.deleteMany({});

    // Create roles
    const roleObjects = await Role.create(roles);

    for (const user of users) {
      // Create users
      const userObject = await User.create({
        name: user.name,
        email: user.email,
        password: user.password,
        confirmed: true,
        blocked: false,
      });

      const profile = studentProfiles.find((p) => p.email === user.email);
      // Create profiles for users
      await Profile.create({
        user: userObject._id,
        name: userObject.name,
        stdId: profile.stdId,
        firstName: userObject.name.split(" ")[0],
        lastName: userObject.name.split(" ")[1],
        gender: profile.gender,
        DOB: profile.DOB,
        email: profile.email,
        phone: profile.phone,
        mailingAddress: profile.mailingAddress,
        programOfStudy: profile.programOfStudy,
        studentStatus: profile.studentStatus,
        residence: profile.residence,
        advisor: profile.advisor,
        permanentAddress: profile.permanentAddress,
        currentGPA: profile.currentGPA,
        academicLevel: profile.academicLevel,
        concentration: profile.concentration,
        college: profile.college,
        graduationDate: profile.graduationDate,
      });

      // Create user roles
      roleObjects.map(
        async (r) =>
          r.type === "SUPER_ADMIN" &&
          (await UserRole.create({
            user: userObject._id,
            role: r._id,
          }))
      );
    }

    // create faculties

    for (const faculty of faculties) {
      
      const facultyObject = await Faculties.create({
        facultyName: faculty.facultyName,
        researchArea: faculty.researchArea,
        Designation: faculty.designation,
        college: faculty.college,
        officeLocation: faculty.officeLocation,
        email: faculty.email,
        phone: faculty.phone,
      });
    }

    // create books and journal

    for (const book of booksAndJournals) {
      
      const bookObject = await Books.create({
        bookId: book.bookId,
        bookType: book.bookType,
        bookDetails: book.bookDetails,
        subject: book.subject,
      });
    }

    // create transcripts

    for (const transcript of transcripts) {
      
      const transcriptsObject = await Transcripts.create({
        stdId: transcript.stdId,
        firstName: transcript.firstName,
        lastName: transcript.lastName,
        email: transcript.email,
        mailingAddress: transcript.mailingAddress,
        transcriptLevel: transcript.transcriptLevel,
        transcriptType: transcript.transcriptType,
        status: transcript.status,
      });
    }

    //create payments collection
    for (const payment of payments) {
      
      const paymentObject = await Payments.create({
        stdId: payment.stdId,
        firstName: payment.firstName,
        lastName: payment.lastName,
        term: payment.term,
        detailCode: payment.detailCode,
        description: payment.description,
        charge: payment?.charge,
        payment: payment?.payment,
        balance: payment?.balance,
        programOfStudy: payment.programOfStudy,
      });
    }

    // create academics collection
    for (const academic of academics) {
     
      const academicObject = await Academics.create({
        stdId: academic.stdId,
        firstName: academic.firstName,
        lastName: academic.lastName,
        email: academic.email,
        programOfStudy: academic.programOfStudy,
        courseCode: academic.courseCode,
        courseDescription: academic.courseDescription,
        credits: academic.credits,
        grade: academic.grade,
        term: academic.term,
      });
    }

    // Check duplicate permissions
    permissions.map((p) => {
      if (p.method && p.route) {
        const duplicate = permissions.filter(
          (p2) => p2.method === p.method && p2.route === p.route
        );
        if (duplicate.length > 1) {
          return res.status(500).json({
            error: `Duplicate permission: ${p.method} ${p.route}`,
          });
        }
      }
    });

    // Create permissions
    const permissionObjects = await Permission.create(permissions);

    // Create client permissions
    const clientPermissionObjects = await ClientPermission.create(
      clientPermissions
    );

    // Find super admin role
    const superAdminRole = roleObjects.find((r) => r.type === "SUPER_ADMIN");

    // Create permissions for super admin role
    superAdminRole.permission = permissionObjects.map((p) => p._id);

    // create client permissions for super admin role
    superAdminRole.clientPermission = clientPermissionObjects.map((p) => p._id);

    // Update super admin role
    await superAdminRole.save();

    res.status(200).json({
      message: "Database seeded successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
