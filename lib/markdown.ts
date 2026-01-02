/**
 * Simple markdown to HTML converter
 * Handles common markdown elements without external dependencies
 */

export function markdownToHtml(markdown: string): string {
  if (!markdown) return '';

  let html = markdown;

  // Remove hashtags (social media style) - they look unprofessional in blog content
  html = html.replace(/#(\w+)/g, '$1');

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-10 mb-6">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 underline">$1</a>');

  // Unordered lists
  html = html.replace(/^\s*[-*]\s+(.*)$/gim, '<li class="ml-4">$1</li>');
  html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc list-inside space-y-2 my-4">$&</ul>');

  // Ordered lists
  html = html.replace(/^\s*\d+\.\s+(.*)$/gim, '<li class="ml-4">$1</li>');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr class="my-8 border-gray-200" />');

  // Paragraphs - wrap standalone text blocks
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    // Skip if already an HTML element or empty
    if (!trimmed || trimmed.startsWith('<') || trimmed.startsWith('-') || trimmed.match(/^\d+\./)) {
      return line;
    }
    return `<p class="text-gray-600 leading-relaxed mb-4">${trimmed}</p>`;
  });

  html = processedLines.join('\n');

  // Clean up empty paragraphs
  html = html.replace(/<p class="[^"]*"><\/p>/g, '');

  // Clean up multiple line breaks
  html = html.replace(/\n{3,}/g, '\n\n');

  return html;
}
