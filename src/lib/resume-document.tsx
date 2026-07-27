import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { resume } from "../../other/resume";

/** Compact one-page letter resume. Keep content in other/resume.ts lean. */
const COLORS = {
  ink: "#0f172a",
  muted: "#475569",
  line: "#cbd5e1",
  accent: "#0f766e",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 44,
    paddingBottom: 32,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: COLORS.ink,
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
    color: COLORS.ink,
    lineHeight: 1.25,
    marginBottom: 4,
  },
  title: {
    fontSize: 10,
    color: COLORS.accent,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.35,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  contactItem: {
    fontSize: 8,
    color: COLORS.muted,
    lineHeight: 1.4,
  },
  sep: {
    fontSize: 8,
    color: COLORS.line,
    marginHorizontal: 5,
    lineHeight: 1.4,
  },
  link: {
    fontSize: 8,
    color: COLORS.accent,
    textDecoration: "none",
    lineHeight: 1.4,
  },
  section: {
    marginTop: 7,
  },
  sectionTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    color: COLORS.accent,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    lineHeight: 1.3,
  },
  summary: {
    fontSize: 8.5,
    color: COLORS.ink,
    lineHeight: 1.4,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillLabel: {
    width: 58,
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    lineHeight: 1.35,
  },
  skillItems: {
    flex: 1,
    fontSize: 8,
    color: COLORS.muted,
    lineHeight: 1.35,
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 4,
  },
  roleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    lineHeight: 1.3,
  },
  roleMeta: {
    fontSize: 8,
    color: COLORS.muted,
    lineHeight: 1.3,
  },
  companyLine: {
    fontSize: 8,
    color: COLORS.muted,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 2,
  },
  bulletDot: {
    width: 8,
    fontSize: 8,
    color: COLORS.accent,
    lineHeight: 1.35,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.35,
  },
  eduHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  eduSchool: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    lineHeight: 1.3,
  },
  eduDegree: {
    fontSize: 8,
    color: COLORS.muted,
    marginTop: 1,
    lineHeight: 1.3,
  },
  listItem: {
    fontSize: 8,
    marginBottom: 1,
    color: COLORS.ink,
    lineHeight: 1.35,
  },
});

function ContactSep() {
  return <Text style={styles.sep}>·</Text>;
}

export function ResumeDocument() {
  const {
    name,
    title,
    email,
    phone,
    location,
    links,
    summary,
    skills,
    experience,
    education,
    extracurricular,
  } = resume;

  return (
    <Document
      title={`${name} - Resume`}
      author={name}
      subject="Resume"
      keywords="software engineer, full stack, resume"
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{name.toUpperCase()}</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{email}</Text>
            <ContactSep />
            <Text style={styles.contactItem}>{phone}</Text>
            <ContactSep />
            <Text style={styles.contactItem}>{location}</Text>
            {links.map((link) => (
              <React.Fragment key={link.label}>
                <ContactSep />
                <Link src={link.url} style={styles.link}>
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.map((group) => (
            <View key={group.label} style={styles.skillRow}>
              <Text style={styles.skillLabel}>{group.label}</Text>
              <Text style={styles.skillItems}>{group.items.join("  ·  ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((role) => (
            <View key={`${role.company}-${role.title}-${role.start}`} wrap={false}>
              <View style={styles.roleHeader}>
                <Text style={styles.roleTitle}>{role.title}</Text>
                <Text style={styles.roleMeta}>
                  {role.start} - {role.end}
                </Text>
              </View>
              <Text style={styles.companyLine}>
                {role.company}  ·  {role.location}
              </Text>
              {role.highlights.map((h) => (
                <View key={h} style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={edu.school}>
              <View style={styles.eduHeader}>
                <Text style={styles.eduSchool}>{edu.school}</Text>
                <Text style={styles.roleMeta}>
                  {edu.start} - {edu.end}
                </Text>
              </View>
              <Text style={styles.eduDegree}>{edu.degree}</Text>
              {edu.notes?.length ? (
                <Text style={styles.listItem}>{edu.notes.join("  ·  ")}</Text>
              ) : null}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Extracurricular</Text>
          {extracurricular.map((item) => (
            <Text key={item} style={styles.listItem}>
              •  {item}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
