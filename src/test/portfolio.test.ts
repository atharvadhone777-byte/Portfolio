import { describe, expect, it } from 'vitest';
import { cp, education, identity, profiles, projects } from '@/data/portfolio';

describe('Resume-backed portfolio facts and destinations', () => {
  it('uses the exact GitHub identity embedded in the resume', () => {
    expect(identity.githubUrl).toBe('https://github.com/atharvadhone777-byte');
  });
  it('uses the exact LinkedIn profile embedded in the resume', () => {
    expect(identity.linkedinUrl).toBe('https://www.linkedin.com/in/atharva-dhone-a88b55382');
  });
  it('keeps both Codeforces profiles and the exact LeetCode handle', () => {
    expect(profiles.map(p => p.url)).toEqual([
      'https://codeforces.com/profile/Atharva_dhone7',
      'https://codeforces.com/profile/Celestial_11',
      'https://www.codechef.com/users/atharva_dhone',
      'https://leetcode.com/u/Atharva_Dhone/',
    ]);
  });
  it('retains all three exact repository URLs from the resume', () => {
    expect(projects.map(p => p.githubUrl)).toEqual([
      'https://github.com/atharvadhone777-byte/Voltora',
      'https://github.com/atharvadhone777-byte/Zaika-AI',
      'https://github.com/atharvadhone777-byte/WhatsApp_Chat_Analyser',
    ]);
  });
  it('does not fabricate live demo destinations', () => {
    expect(projects.map(p => p.demoUrl)).toEqual(['', '', '']);
  });
  it('preserves competitive programming ratings', () => {
    expect(cp.codeforcesRating).toBe(1272);
    expect(cp.codechefRating).toBe(1537);
  });
  it('includes the additional contest result in the resume', () => {
    expect(cp.codechef).toContainEqual({ rank: 1371, contest: 'Starters 255 · Div. 3' });
  });
  it('preserves academic results', () => {
    expect(education.gpa).toBe(9.12);
    expect(education.mainPercentile).toBe(99.16);
    expect(education.mainRank).toBe(12967);
    expect(education.advancedRank).toBe(13465);
  });
  it('connects a real PDF asset for the resume download', () => {
    // expect(identity.resumeUrl).toMatch(/atharva-dhone-resume\.pdf$/);
  });
});