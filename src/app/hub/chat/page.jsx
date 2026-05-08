"use client";

export const dynamic = 'force-dynamic';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Streamdown } from 'streamdown';
import {
  Bot, Terminal, Sparkles, LineChart, Globe, Settings,
  Send, User, Cpu, Zap, Shield, Search, Plus, X,
  MessageSquare, Layers, Code, Database,
  BrainCircuit, Lightbulb,
  Ghost, Flame, Star, Heart, Music, Camera, Coffee,
  Briefcase, Rocket, Gamepad, Anchor, Atom, Award,
  Book, Cat, Dog, Feather, Moon, Sun, Umbrella,
  Network, Link as LinkIcon, Newspaper, Command, PenTool,
  PanelRight, FileText, List, Trash2, Wrench, Paperclip, Mic, Share2, Bookmark, Columns
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';

// --- Data ---
const PERSONAS = [
  { id: 'default', name: 'helpful assistant', icon: Bot, color: 'text-[#00f0ff]', bg: 'bg-[#00f0ff]/10', customHex: null, prompt: 'You are a helpful, respectful, and honest assistant.', isCustom: false },
  { id: 'coder', name: '10x developer', icon: Terminal, color: 'text-white', bg: 'bg-white/10', customHex: null, prompt: 'You are an elite software engineer. Provide concise, highly optimized code. Skip pleasantries.', isCustom: false },
  { id: 'creative', name: 'creative muse', icon: Sparkles, color: 'text-zinc-300', bg: 'bg-zinc-300/10', customHex: null, prompt: 'You are a creative muse. Think outside the box, use vivid imagery, and inspire the user.', isCustom: false },
  { id: 'analyst', name: 'data analyst', icon: LineChart, color: 'text-zinc-400', bg: 'bg-zinc-400/10', customHex: null, prompt: 'You are a meticulous data analyst. Focus on facts, logic, and structured breakdowns.', isCustom: false },
];

const AVAILABLE_ICONS = {
  Bot, Terminal, Sparkles, LineChart, User, Cpu, Zap, Shield,
  BrainCircuit, Lightbulb, MessageSquare, Code, Database,
  Ghost, Flame, Star, Heart, Music, Camera, Coffee,
  Briefcase, Rocket, Gamepad, Anchor, Atom, Award,
  Book, Cat, Dog, Feather, Moon, Sun, Umbrella,
  Command, FileText, List, Trash2,
};

const AVAILABLE_COLORS = [
  { color: 'text-[#00f0ff]', bg: 'bg-[#00f0ff]/10', hex: '#00f0ff' },
  { color: 'text-white', bg: 'bg-white/10', hex: '#ffffff' },
  { color: 'text-zinc-300', bg: 'bg-zinc-300/10', hex: '#d4d4d8' },
  { color: 'text-zinc-400', bg: 'bg-zinc-400/10', hex: '#a1a1aa' },
  { color: 'text-zinc-500', bg: 'bg-zinc-500/10', hex: '#71717a' },
  { color: 'text-zinc-600', bg: 'bg-zinc-600/10', hex: '#52525b' },
];

const PROMPT_INJECTS = [
  { id: 'eli5', label: 'eli5', icon: Lightbulb, instruction: 'Explain your answer as if I am 5 years old.' },
  { id: 'concise', label: 'ultra concise', icon: Zap, instruction: 'Be extremely concise. Use bullet points where possible. No fluff.' },
  { id: 'sarcastic', label: 'sarcastic', icon: MessageSquare, instruction: 'Adopt a highly sarcastic and witty tone.' },
  { id: 'stepbystep', label: 'step-by-step', icon: Layers, instruction: 'Think step-by-step and show your reasoning before answering.' },
  { id: 'devil', label: "devil's advocate", icon: Shield, instruction: "Play devil's advocate. Challenge the user's assumptions." },
];

const SKILLS = [
  { id: 'web-search', name: 'web search', description: 'google search grounding', icon: Globe, template: 'search the web for ' },
  { id: 'code-exec', name: 'code execution', description: 'run python via gemini', icon: Code, template: 'write and run python to ' },
  { id: 'db-access', name: 'database access', description: 'query ktg snippets db', icon: Database, template: 'find snippets about ' },
];

const MCP_SERVERS = [
  { id: 'context7', name: 'context7', description: 'library documentation' },
  { id: 'gemini-bridge', name: 'gemini bridge', description: 'gemini consultation' },
  { id: 'chrome-devtools', name: 'chrome devtools', description: 'browser automation' },
  { id: 'filesystem', name: 'filesystem', description: 'file operations' },
];

const MODEL_FAMILIES = [
  { family: 'gemini', models: [
    { id: 'gemini-2.5-flash', name: 'gemini 2.5 flash', badge: 'fast' },
    { id: 'gemini-2.5-pro', name: 'gemini 2.5 pro', badge: 'pro' },
  ]},
  { family: 'claude', models: [
    { id: 'claude-sonnet-4', name: 'claude sonnet 4', badge: 'balanced' },
    { id: 'claude-opus-4', name: 'claude opus 4', badge: 'flagship' },
    { id: 'claude-haiku-3.5', name: 'claude haiku 3.5', badge: 'fast' },
  ]},
  { family: 'chatgpt', models: [
    { id: 'gpt-4.1', name: 'gpt-4.1', badge: 'flagship' },
    { id: 'gpt-4.1-mini', name: 'gpt-4.1 mini', badge: 'fast' },
    { id: 'o3-mini', name: 'o3-mini', badge: 'reasoning' },
  ]},
  { family: 'grok', models: [
    { id: 'grok-3', name: 'grok 3', badge: 'flagship' },
    { id: 'grok-3-mini', name: 'grok 3 mini', badge: 'fast' },
  ]},
  { family: 'deepseek', models: [
    { id: 'deepseek-chat', name: 'deepseek chat', badge: 'balanced' },
    { id: 'deepseek-reasoner', name: 'deepseek reasoner', badge: 'reasoning' },
  ]},
  { family: 'qwen', models: [
    { id: 'qwen-2.5-72b', name: 'qwen 2.5 72b', badge: 'flagship' },
    { id: 'qwen-coder-32b', name: 'qwen coder 32b', badge: 'code' },
  ]},
  { family: 'kimi', models: [
    { id: 'kimi-k2', name: 'kimi k2', badge: 'flagship' },
    { id: 'moonshot-v1-8k', name: 'moonshot v1', badge: 'fast' },
  ]},
  { family: 'llama', models: [
    { id: 'llama-4-scout', name: 'llama 4 scout', badge: 'new' },
    { id: 'llama-3.3-70b', name: 'llama 3.3 70b', badge: 'balanced' },
  ]},
  { family: 'mistral', models: [
    { id: 'mistral-large', name: 'mistral large', badge: 'flagship' },
    { id: 'codestral', name: 'codestral', badge: 'code' },
  ]},
];

// Flat list for selectors
const MODELS = MODEL_FAMILIES.flatMap(f => f.models);

const NAV_LINKS = [
  { id: 'chat', label: 'chat', icon: MessageSquare, href: '/hub/chat' },
  { id: 'snippets', label: 'snippets', icon: FileText, href: '/hub/snippets' },
  { id: 'prompt-forge', label: 'prompt forge', icon: Wrench, href: '#' },
  { id: 'workflow', label: 'workflow studio', icon: Network, href: '#' },
  { id: 'embed-chain', label: 'embed chain', icon: LinkIcon, href: '#' },
  { id: 'platforms', label: 'platforms', icon: Globe, href: '#' },
  { id: 'google-universe', label: 'google universe', icon: Atom, href: '#' },
  { id: 'newsroom', label: 'newsroom', icon: Newspaper, href: '#' },
  { id: 'orchestration', label: 'orchestration', icon: Command, href: '#' },
  { id: 'content-hub', label: 'content hub', icon: PenTool, href: '#' },
];

/** Cyan edge glow / hover — parity with DockNav */
const CHAT_ROW_GLOW =
  "transition-all duration-300 border border-transparent hover:border-[rgba(0,240,255,0.28)] hover:bg-[rgba(0,240,255,0.06)] hover:text-[#00f0ff] hover:shadow-[0_0_14px_rgba(0,240,255,0.22),0_0_28px_rgba(0,240,255,0.08)]";
const CHAT_ICON_BTN =
  "border border-zinc-800 transition-all duration-300 hover:border-[rgba(0,240,255,0.4)] hover:text-[#00f0ff] hover:bg-[rgba(0,240,255,0.08)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3),0_0_40px_rgba(0,240,255,0.12)]";
const CHAT_ASIDE_EDGE =
  "transition-[border-color,box-shadow] duration-300 hover:border-[rgba(0,240,255,0.22)] hover:shadow-[inset_-4px_0_28px_-6px_rgba(0,240,255,0.14)]";

// --- Icon Picker ---
const IconPicker = ({ selected, onSelect }) => {
  const [search, setSearch] = useState('');
  const filtered = Object.keys(AVAILABLE_ICONS).filter(n =>
    n.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-2 border border-zinc-800 bg-black p-2 transition-[border-color,box-shadow] duration-300 hover:border-[rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
        <input
          type="text"
          placeholder="search icons..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 pl-8 pr-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-[#00f0ff] placeholder:text-zinc-600 rounded-none"
        />
      </div>
      <div className="grid grid-cols-6 gap-1.5 max-h-36 overflow-y-auto custom-scrollbar pr-1">
        {filtered.map(name => {
          const Icon = AVAILABLE_ICONS[name];
          return (
            <button
              key={name}
              onClick={() => onSelect(name)}
              title={name}
              className={cn(
                "aspect-square flex items-center justify-center transition-all",
                selected === name
                  ? "bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff]"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-6 text-center py-6 text-xs text-zinc-500">no icons found</div>
        )}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function HubChat() {
  const [selectedPersonaId, setSelectedPersonaId] = useState('default');
  const [selectedModelId, setSelectedModelId] = useState('gemini-2.5-flash');
  const [activeSkills, setActiveSkills] = useState([]);
  const [activeMcps, setActiveMcps] = useState([]);
  const [activeInjects, setActiveInjects] = useState([]);
  const [customPersonas, setCustomPersonas] = useState([]);
  const [isPersonaModalOpen, setIsPersonaModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isDualMode, setIsDualMode] = useState(false);
  const [selectedPersonaIdB, setSelectedPersonaIdB] = useState('coder');
  const [selectedModelIdB, setSelectedModelIdB] = useState('claude-sonnet-4');
  const [sharedInput, setSharedInput] = useState('');
  const [macros, setMacros] = useState([
    { id: 'm1', name: 'summarize thread', iconName: 'FileText', prompt: 'Please summarize the entire thread above.' },
    { id: 'm2', name: 'extract action items', iconName: 'List', prompt: 'Extract all action items from this conversation.' },
  ]);
  const [isMacroModalOpen, setIsMacroModalOpen] = useState(false);
  const [newMacro, setNewMacro] = useState({ name: '', iconName: 'Command', prompt: '' });
  const [newPersona, setNewPersona] = useState({ name: '', prompt: '', iconName: 'Bot', colorIdx: 0, customColor: '#00f0ff' });

  // 8-slot prompt-modifier loadout. Each slot is either null (empty) or
  // { id, label, instruction }. Slots 0-4 prefill with built-in modifiers
  // so first-load isn't a wall of empty grey buttons.
  const SLOT_COUNT = 8;
  const DEFAULT_LOADOUT = [
    ...PROMPT_INJECTS.map(i => ({ id: i.id, label: i.label, instruction: i.instruction })),
    ...Array(SLOT_COUNT - PROMPT_INJECTS.length).fill(null),
  ];
  const [loadoutSlots, setLoadoutSlots] = useState(DEFAULT_LOADOUT);
  const [isModifierModalOpen, setIsModifierModalOpen] = useState(false);
  const [activeSlotIndex, setActiveSlotIndex] = useState(null);
  const [newModifier, setNewModifier] = useState({ label: '', instruction: '' });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('hub-chat-personas');
    if (saved) try { setCustomPersonas(JSON.parse(saved)); } catch {}
  }, []);
  useEffect(() => { localStorage.setItem('hub-chat-personas', JSON.stringify(customPersonas)); }, [customPersonas]);
  useEffect(() => {
    const saved = localStorage.getItem('hub-chat-macros');
    if (saved) try { setMacros(JSON.parse(saved)); } catch {}
  }, []);
  useEffect(() => { localStorage.setItem('hub-chat-macros', JSON.stringify(macros)); }, [macros]);

  useEffect(() => {
    const saved = localStorage.getItem('hub-chat-loadout:v1');
    if (saved) try {
      const parsed = JSON.parse(saved);
      // Ensure exactly SLOT_COUNT slots — pad or truncate if storage drifted.
      const padded = Array.from({ length: SLOT_COUNT }, (_, i) => parsed[i] ?? null);
      setLoadoutSlots(padded);
    } catch {}
  }, []);
  useEffect(() => { localStorage.setItem('hub-chat-loadout:v1', JSON.stringify(loadoutSlots)); }, [loadoutSlots]);

  const [presets, setPresets] = useState([]);
  const [presetNameInput, setPresetNameInput] = useState('');
  const [isSavingPreset, setIsSavingPreset] = useState(false);
  const presetNameRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('hub-chat-presets');
    if (saved) try { setPresets(JSON.parse(saved)); } catch {}
  }, []);
  useEffect(() => { localStorage.setItem('hub-chat-presets', JSON.stringify(presets)); }, [presets]);

  const savePreset = () => {
    const name = presetNameInput.trim();
    if (!name) return;
    setPresets(prev => [...prev, {
      id: 'preset-' + Date.now(),
      name,
      personaId: selectedPersonaId,
      modelId: selectedModelId,
      injects: [...activeInjects],
      skills: [...activeSkills],
      mcps: [...activeMcps],
    }]);
    setPresetNameInput('');
    setIsSavingPreset(false);
  };

  const applyPreset = id => {
    const p = presets.find(p => p.id === id);
    if (!p) return;
    setSelectedPersonaId(p.personaId);
    setSelectedModelId(p.modelId);
    setActiveInjects(p.injects || []);
    setActiveSkills(p.skills || []);
    setActiveMcps(p.mcps || []);
  };

  const deletePreset = id => setPresets(prev => prev.filter(p => p.id !== id));

  const allPersonas = [
    ...PERSONAS,
    ...customPersonas.map(cp => ({
      id: cp.id, name: cp.name,
      icon: AVAILABLE_ICONS[cp.iconName] || Bot,
      color: cp.colorIdx === -1 ? '' : (AVAILABLE_COLORS[cp.colorIdx]?.color || AVAILABLE_COLORS[0].color),
      bg: cp.colorIdx === -1 ? '' : (AVAILABLE_COLORS[cp.colorIdx]?.bg || AVAILABLE_COLORS[0].bg),
      customHex: cp.colorIdx === -1 ? cp.customColor : null,
      prompt: cp.prompt, isCustom: true,
    }))
  ];

  const selectedPersona = allPersonas.find(p => p.id === selectedPersonaId) || allPersonas[0];
  const PersonaIcon = selectedPersona.icon;
  const selectedPersonaB = allPersonas.find(p => p.id === selectedPersonaIdB) || allPersonas[0];
  const PersonaIconB = selectedPersonaB.icon;

  const buildSystemPrompt = (personaId, injects) => {
    const p = allPersonas.find(x => x.id === (personaId ?? selectedPersonaId)) || allPersonas[0];
    let sys = p.prompt;
    const activeSet = new Set(injects ?? activeInjects);
    const injectInstructions = loadoutSlots
      .filter(slot => slot && activeSet.has(slot.id))
      .map(slot => slot.instruction);
    if (injectInstructions.length > 0)
      sys += '\n\nAdditional Modifiers:\n' + injectInstructions.join('\n');
    return sys;
  };

  // Local input state — useChat in @ai-sdk/react@3 no longer manages this for you.
  const [input, setInput] = useState('');

  // Refs hold the current chat body so prepareSendMessagesRequest sees fresh
  // values per-request without recreating the transport (which would reset the chat).
  const bodyRefA = useRef({});
  bodyRefA.current = {
    model: selectedModelId,
    systemPrompt: buildSystemPrompt(selectedPersonaId, activeInjects),
    enableWebSearch: activeSkills.includes('web-search'),
    activeSkills,
    activeMcps,
  };
  const bodyRefB = useRef({});
  bodyRefB.current = {
    model: selectedModelIdB,
    systemPrompt: buildSystemPrompt(selectedPersonaIdB, activeInjects),
    enableWebSearch: activeSkills.includes('web-search'),
    activeSkills,
    activeMcps,
  };

  const transportA = useMemo(() => new DefaultChatTransport({
    api: '/api/hub/chat',
    prepareSendMessagesRequest: ({ messages }) => ({
      body: { messages, ...bodyRefA.current },
    }),
  }), []);

  const transportB = useMemo(() => new DefaultChatTransport({
    api: '/api/hub/chat',
    prepareSendMessagesRequest: ({ messages }) => ({
      body: { messages, ...bodyRefB.current },
    }),
  }), []);

  const {
    messages,
    sendMessage: sendMessageA,
    status: statusA,
  } = useChat({
    id: 'pane-a',
    transport: transportA,
    experimental_throttle: 50,
  });
  const isLoading = statusA === 'submitted' || statusA === 'streaming';

  const {
    messages: messagesB,
    sendMessage: sendMessageB,
    status: statusB,
  } = useChat({
    id: 'pane-b',
    transport: transportB,
    experimental_throttle: 50,
  });
  const isLoadingB = statusB === 'submitted' || statusB === 'streaming';

  const submit = (e) => {
    e?.preventDefault?.();
    const text = input.trim();
    if (!text) return;
    sendMessageA({ role: 'user', parts: [{ type: 'text', text }] });
    if (isDualMode) sendMessageB({ role: 'user', parts: [{ type: 'text', text }] });
    setInput('');
  };

  // Extract plain text from a UIMessage's parts array (handles markdown rendering input).
  const getMessageText = (msg) =>
    msg.parts?.filter((p) => p.type === 'text').map((p) => p.text).join('') ?? msg.content ?? '';

  // Renders a single pane's ScrollArea + messages. Used for both panes when dual-mode is on.
  // panePersona: the persona object for THIS pane (icon/colors/bg).
  // withScrollRef: only pane A pins messagesEndRef so auto-scroll tracks the active stream.
  const renderPane = (paneMessages, paneLoading, panePersona, withScrollRef) => {
    const PIcon = panePersona.icon;
    return (
      <ScrollArea className="flex-1 px-4 py-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-4 pb-40">
          {paneMessages.map(msg => (
            <div key={msg.id} className={cn("flex gap-3", msg.role === 'user' ? "justify-end" : "justify-start")}>
              {msg.role === 'assistant' && (
                <div className={cn("h-7 w-7 shrink-0 flex items-center justify-center mt-0.5", panePersona.bg)}>
                  <PIcon className={cn("h-4 w-4", panePersona.color)} style={panePersona.customHex ? { color: panePersona.customHex } : {}} />
                </div>
              )}
              <div className={cn(
                "max-w-[80%] w-fit px-3.5 py-2.5 text-sm leading-relaxed transition-[border-color,box-shadow] duration-300",
                msg.role === 'user'
                  ? "border border-[#00f0ff]/25 bg-zinc-900 text-zinc-100 shadow-[0_0_16px_rgba(0,240,255,0.14),0_0_32px_rgba(0,240,255,0.06)] hover:border-[rgba(0,240,255,0.4)] hover:shadow-[0_0_22px_rgba(0,240,255,0.22),0_0_44px_rgba(0,240,255,0.1)]"
                  : "border border-[#00f0ff]/15 bg-zinc-950 text-zinc-200 shadow-[0_0_14px_rgba(0,240,255,0.08)] hover:border-[rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.12)]",
              )}>
                {msg.role === 'assistant' ? (
                  <div className="prose prose-invert prose-sm max-w-none prose-p:my-1 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-code:text-[#00f0ff] prose-code:bg-transparent prose-code:before:content-none prose-code:after:content-none">
                    <Streamdown>{getMessageText(msg)}</Streamdown>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed">{getMessageText(msg)}</p>
                )}
              </div>
              {msg.role === 'user' && (
                <div className="h-7 w-7 shrink-0 flex items-center justify-center bg-zinc-800 mt-0.5">
                  <User className="h-4 w-4 text-zinc-400" />
                </div>
              )}
            </div>
          ))}
          {paneLoading && (
            <div className="flex gap-3">
              <div className={cn("h-7 w-7 shrink-0 flex items-center justify-center", panePersona.bg)}>
                <PIcon className={cn("h-4 w-4", panePersona.color)} />
              </div>
              <div className="flex items-center gap-1 px-4 py-3">
                {[0, 1, 2].map(i => (
                  <span key={i} className="h-1.5 w-1.5 bg-[#00f0ff] animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            </div>
          )}
          {withScrollRef && <div ref={messagesEndRef} />}
        </div>
      </ScrollArea>
    );
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [messages]);

  const toggleSkill = id => setActiveSkills(prev =>
    prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
  );
  const toggleInject = id => setActiveInjects(prev =>
    prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
  );

  const fireMacro = macro => sendMessageA({ role: 'user', parts: [{ type: 'text', text: macro.prompt }] });

  const handleSaveMacro = () => {
    if (!newMacro.name.trim() || !newMacro.prompt.trim()) return;
    setMacros(prev => [...prev, { id: 'macro-' + Date.now(), ...newMacro }]);
    setIsMacroModalOpen(false);
    setNewMacro({ name: '', iconName: 'Command', prompt: '' });
  };

  const openCreateForSlot = (slotIndex) => {
    setActiveSlotIndex(slotIndex);
    setNewModifier({ label: '', instruction: '' });
    setIsModifierModalOpen(true);
  };
  const handleSaveModifier = () => {
    if (!newModifier.label.trim() || !newModifier.instruction.trim()) return;
    if (activeSlotIndex == null) return;
    const id = 'slot-' + activeSlotIndex + '-' + Date.now();
    setLoadoutSlots(prev => prev.map((s, i) =>
      i === activeSlotIndex ? { id, label: newModifier.label.trim(), instruction: newModifier.instruction.trim() } : s
    ));
    setIsModifierModalOpen(false);
    setActiveSlotIndex(null);
    setNewModifier({ label: '', instruction: '' });
  };
  const handleClearSlot = (slotIndex, e) => {
    e?.stopPropagation();
    const slot = loadoutSlots[slotIndex];
    if (slot) setActiveInjects(prev => prev.filter(i => i !== slot.id));
    setLoadoutSlots(prev => prev.map((s, i) => i === slotIndex ? null : s));
  };

  const handleSavePersona = () => {
    if (!newPersona.name.trim() || !newPersona.prompt.trim()) return;
    const cp = { id: 'custom-' + Date.now(), ...newPersona };
    setCustomPersonas(prev => [...prev, cp]);
    setSelectedPersonaId(cp.id);
    setIsPersonaModalOpen(false);
    setNewPersona({ name: '', prompt: '', iconName: 'Bot', colorIdx: 0, customColor: '#00f0ff' });
  };

  return (
    <div className="flex h-[100dvh] w-full bg-black text-zinc-50 overflow-hidden font-[family-name:var(--font-mono)] selection:bg-[#00f0ff] selection:text-black">

      {/* LEFT SIDEBAR */}
      <aside
        className={cn(
          "group absolute z-20 flex h-full w-16 shrink-0 flex-col items-start overflow-hidden border-r border-zinc-800 bg-black py-4 transition-all duration-300 hover:w-56 md:sticky md:top-0 md:h-screen md:self-start",
          CHAT_ASIDE_EDGE,
        )}
      >
        <div className="px-4 mb-6 flex items-center gap-3 shrink-0 w-full">
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center transition-[filter,transform] duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.45)] group-hover:scale-[1.02]">
            <Image
              src="/assets/ktg.svg"
              alt=".ktg"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              unoptimized
              priority
            />
          </div>
          <span className="font-[family-name:var(--font-syne)] font-bold lowercase text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">.ktg hub</span>
        </div>
        <div className="flex-1 w-full flex flex-col gap-1 px-2 overflow-y-auto overflow-x-hidden no-scrollbar">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "flex w-full items-center gap-3 border border-transparent p-2.5 text-zinc-500",
                CHAT_ROW_GLOW,
                link.id === 'chat' &&
                  "border-[rgba(0,240,255,0.35)] bg-[rgba(0,240,255,0.1)] text-[#00f0ff] shadow-[0_0_16px_rgba(0,240,255,0.22),0_0_32px_rgba(0,240,255,0.08)]",
              )}
            >
              <link.icon className="h-5 w-5 shrink-0" />
              <span className="font-[family-name:var(--font-syne)] font-bold lowercase text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{link.label}</span>
            </a>
          ))}
          <div className="w-full h-px bg-zinc-800 my-2 shrink-0" />
          <span className="px-2 text-[10px] font-[family-name:var(--font-syne)] font-bold lowercase text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shrink-0">active skills</span>
          {SKILLS.map(skill => {
            const isActive = activeSkills.includes(skill.id);
            return (
              <button
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                title={skill.name}
                className={cn(
                  "flex w-full items-center gap-3 border border-transparent p-2.5 text-zinc-500",
                  CHAT_ROW_GLOW,
                  isActive &&
                    "border-l-2 border-l-[#00f0ff] border-[rgba(0,240,255,0.25)] bg-[rgba(0,240,255,0.1)] text-[#00f0ff] shadow-[0_0_14px_rgba(0,240,255,0.2)]",
                )}
              >
                <skill.icon className="h-5 w-5 shrink-0" />
                <span className="font-[family-name:var(--font-syne)] font-bold lowercase text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{skill.name}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex flex-col flex-1 min-w-0 ml-16 md:ml-0">

        {/* HEADER */}
        <header className="sticky top-0 z-30 flex shrink-0 items-center justify-between border-b border-zinc-800 bg-black px-4 py-3 shadow-[0_1px_0_rgba(0,240,255,0.06),0_8px_32px_-12px_rgba(0,240,255,0.05)]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className={cn("h-7 w-7 flex items-center justify-center shrink-0", selectedPersona.bg)}>
                <PersonaIcon
                  className={cn("h-4 w-4", selectedPersona.color)}
                  style={selectedPersona.customHex ? { color: selectedPersona.customHex } : {}}
                />
              </div>
              <Select value={selectedPersonaId} onValueChange={setSelectedPersonaId}>
                <SelectTrigger className="h-7 w-auto gap-1 rounded-none border-zinc-800 bg-transparent pr-2 text-xs font-bold lowercase text-white font-[family-name:var(--font-syne)] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(0,240,255,0.35)] hover:shadow-[0_0_14px_rgba(0,240,255,0.15)] focus:ring-[#00f0ff]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-zinc-800 rounded-none">
                  {allPersonas.map(p => {
                    const PIcon = p.icon;
                    return (
                      <SelectItem key={p.id} value={p.id} className="text-xs lowercase font-[family-name:var(--font-syne)] focus:bg-zinc-800 focus:text-white cursor-pointer rounded-none">
                        <div className="flex items-center gap-2">
                          <PIcon className={cn("h-3.5 w-3.5", p.color)} />
                          {p.name}
                        </div>
                      </SelectItem>
                    );
                  })}
                  <div className="h-px bg-zinc-800 my-1" />
                  <button
                    onClick={e => { e.preventDefault(); setIsPersonaModalOpen(true); }}
                    className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 font-[family-name:var(--font-syne)] lowercase"
                  >
                    <Plus className="h-3.5 w-3.5" /> new persona
                  </button>
                </SelectContent>
              </Select>
            </div>
            <div className="w-px h-4 bg-zinc-800" />
            <Select value={selectedModelId} onValueChange={setSelectedModelId}>
              <SelectTrigger className="h-7 w-auto gap-1 rounded-none border-zinc-800 bg-transparent pr-2 text-xs lowercase text-zinc-400 font-[family-name:var(--font-syne)] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(0,240,255,0.35)] hover:text-zinc-200 hover:shadow-[0_0_14px_rgba(0,240,255,0.15)] focus:ring-[#00f0ff]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-zinc-950 border-zinc-800 rounded-none">
                {MODELS.map(m => (
                  <SelectItem key={m.id} value={m.id} className="text-xs lowercase font-[family-name:var(--font-syne)] focus:bg-zinc-800 focus:text-white cursor-pointer rounded-none">
                    <div className="flex items-center gap-2">
                      {m.name}
                      <span className="text-[10px] px-1 border border-zinc-700 text-zinc-500">{m.badge}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* PRESETS */}
          <div className="flex items-center gap-1.5">
            {isSavingPreset ? (
              <div className="flex items-center gap-1.5">
                <input
                  ref={presetNameRef}
                  type="text"
                  value={presetNameInput}
                  onChange={e => setPresetNameInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') savePreset();
                    if (e.key === 'Escape') { setIsSavingPreset(false); setPresetNameInput(''); }
                  }}
                  placeholder="preset name..."
                  autoFocus
                  className="h-7 w-36 bg-zinc-900 border border-[#00f0ff] px-2 text-xs text-zinc-100 focus:outline-none placeholder:text-zinc-600 font-[family-name:var(--font-syne)]"
                />
                <button
                  onClick={savePreset}
                  className="h-7 border border-[rgba(0,240,255,0.5)] bg-[#00f0ff] px-2 text-xs font-bold lowercase text-black font-[family-name:var(--font-syne)] transition-all duration-300 hover:bg-[#00f0ff]/85 hover:shadow-[0_0_20px_rgba(0,240,255,0.55),0_0_40px_rgba(0,240,255,0.2)]"
                >
                  save
                </button>
                <button
                  onClick={() => { setIsSavingPreset(false); setPresetNameInput(''); }}
                  className="p-1.5 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <>
                {presets.length > 0 && (
                  <Select onValueChange={applyPreset}>
                    <SelectTrigger className="h-7 w-auto gap-1 rounded-none border-zinc-800 bg-transparent pr-2 text-xs lowercase text-zinc-500 font-[family-name:var(--font-syne)] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(0,240,255,0.3)] hover:shadow-[0_0_12px_rgba(0,240,255,0.12)] focus:ring-[#00f0ff]">
                      <SelectValue placeholder="presets" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-950 border-zinc-800 rounded-none">
                      {presets.map(p => (
                        <div key={p.id} className="flex items-center group">
                          <SelectItem value={p.id} className="flex-1 text-xs lowercase font-[family-name:var(--font-syne)] focus:bg-zinc-800 focus:text-white cursor-pointer rounded-none pr-6">
                            {p.name}
                          </SelectItem>
                          <button
                            onClick={e => { e.stopPropagation(); deletePreset(p.id); }}
                            className="absolute right-1 p-1 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                <button
                  onClick={() => setIsSavingPreset(true)}
                  className={cn("p-1.5 text-zinc-500", CHAT_ICON_BTN)}
                  title="save preset"
                >
                  <Bookmark className="h-4 w-4" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDualMode(v => !v)}
              className={cn(
                "border p-1.5 text-zinc-500 transition-all duration-300",
                isDualMode
                  ? "border-[#00f0ff] bg-[rgba(0,240,255,0.12)] text-[#00f0ff] shadow-[0_0_18px_rgba(0,240,255,0.35),0_0_36px_rgba(0,240,255,0.15)]"
                  : CHAT_ICON_BTN,
              )}
              title="compare two models"
            >
              <Columns className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsRightSidebarOpen(v => !v)}
              className={cn(
                "border p-1.5 text-zinc-500 transition-all duration-300",
                isRightSidebarOpen
                  ? "border-[#00f0ff] bg-[rgba(0,240,255,0.12)] text-[#00f0ff] shadow-[0_0_18px_rgba(0,240,255,0.35),0_0_36px_rgba(0,240,255,0.15)]"
                  : CHAT_ICON_BTN,
              )}
              title="active panel"
            >
              <PanelRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className={cn("p-1.5 text-zinc-500", CHAT_ICON_BTN)}
              title="settings"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* CHAT */}
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex flex-1 overflow-hidden">
              {/* PANE A */}
              <div className="flex flex-col flex-1 min-w-0">
                {renderPane(messages, isLoading, selectedPersona, true)}
              </div>
              {isDualMode && (
                <>
                  <div className="w-px bg-zinc-800 shadow-[1px_0_12px_rgba(0,240,255,0.06)]" />
                  {/* PANE B */}
                  <div className="flex flex-col flex-1 min-w-0">
                    {/* mini header for pane B */}
                    <div className="sticky top-0 z-20 flex shrink-0 items-center gap-3 border-b border-zinc-800 bg-black px-4 py-2 shadow-[0_1px_0_rgba(0,240,255,0.06)]">
                      <div className={cn("h-6 w-6 flex items-center justify-center shrink-0", selectedPersonaB.bg)}>
                        <PersonaIconB
                          className={cn("h-3.5 w-3.5", selectedPersonaB.color)}
                          style={selectedPersonaB.customHex ? { color: selectedPersonaB.customHex } : {}}
                        />
                      </div>
                      <Select value={selectedPersonaIdB} onValueChange={setSelectedPersonaIdB}>
                        <SelectTrigger className="h-7 w-auto gap-1 rounded-none border-zinc-800 bg-transparent pr-2 text-xs font-bold lowercase text-white font-[family-name:var(--font-syne)] hover:border-[rgba(0,240,255,0.35)] focus:ring-[#00f0ff]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-800 rounded-none">
                          {allPersonas.map(p => {
                            const PIcon = p.icon;
                            return (
                              <SelectItem key={p.id} value={p.id} className="text-xs lowercase font-[family-name:var(--font-syne)] focus:bg-zinc-800 focus:text-white cursor-pointer rounded-none">
                                <div className="flex items-center gap-2">
                                  <PIcon className={cn("h-3.5 w-3.5", p.color)} />
                                  {p.name}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <div className="w-px h-4 bg-zinc-800" />
                      <Select value={selectedModelIdB} onValueChange={setSelectedModelIdB}>
                        <SelectTrigger className="h-7 w-auto gap-1 rounded-none border-zinc-800 bg-transparent pr-2 text-xs lowercase text-zinc-400 font-[family-name:var(--font-syne)] hover:border-[rgba(0,240,255,0.35)] hover:text-zinc-200 focus:ring-[#00f0ff]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-800 rounded-none">
                          {MODELS.map(m => (
                            <SelectItem key={m.id} value={m.id} className="text-xs lowercase font-[family-name:var(--font-syne)] focus:bg-zinc-800 focus:text-white cursor-pointer rounded-none">
                              <div className="flex items-center gap-2">
                                {m.name}
                                <span className="text-[10px] px-1 border border-zinc-700 text-zinc-500">{m.badge}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {renderPane(messagesB, isLoadingB, selectedPersonaB, false)}
                  </div>
                </>
              )}
            </div>

            {/* INPUT ZONE — floating with glow */}
            <div className="shrink-0 px-4 pb-6 pt-2 absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none">
              <form onSubmit={submit} className="max-w-3xl mx-auto pointer-events-auto">
                <div className="border border-[#00f0ff]/20 bg-zinc-950/95 backdrop-blur-sm shadow-[0_0_20px_rgba(0,240,255,0.08),0_-8px_32px_rgba(0,0,0,0.8)] transition-[border-color,box-shadow] duration-300 focus-within:border-[rgba(0,240,255,0.45)] focus-within:shadow-[0_0_32px_rgba(0,240,255,0.22),0_0_56px_rgba(0,240,255,0.12),0_-8px_32px_rgba(0,0,0,0.8)]">

                  {/* TOP: 8-slot modifier loadout — grey/red/green glowing buttons */}
                  <div className="px-3 pt-2.5 pb-2 flex flex-wrap items-center gap-2 border-b border-zinc-900">
                    {loadoutSlots.map((slot, idx) => {
                      const slotNum = idx + 1;
                      const isLoaded = !!slot;
                      const isActive = isLoaded && activeInjects.includes(slot.id);
                      return (
                        <div key={idx} className="relative group/slot">
                          <button
                            type="button"
                            onClick={() => isLoaded ? toggleInject(slot.id) : openCreateForSlot(idx)}
                            title={isLoaded ? `slot ${slotNum} · ${slot.label}` : `slot ${slotNum} · click to create`}
                            className={cn(
                              "h-8 px-3 flex items-center gap-2 transition-all duration-200 font-[family-name:var(--font-syne)] text-xs lowercase",
                              !isLoaded
                                ? "border border-dashed border-zinc-700 bg-zinc-950 text-zinc-500 shadow-[0_0_6px_rgba(161,161,170,0.15)] hover:border-zinc-500 hover:text-zinc-300 hover:shadow-[0_0_10px_rgba(161,161,170,0.25)]"
                                : isActive
                                  ? "border border-emerald-400/50 bg-emerald-500/10 text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.4),0_0_20px_rgba(52,211,153,0.15)] hover:bg-emerald-500/15"
                                  : "border border-red-500/40 bg-red-500/5 text-red-400 shadow-[0_0_8px_rgba(239,68,68,0.25)] hover:bg-red-500/10 hover:shadow-[0_0_12px_rgba(239,68,68,0.4)]",
                            )}
                          >
                            <span className={cn(
                              "h-1.5 w-1.5 rounded-full shrink-0",
                              !isLoaded ? "bg-zinc-600" :
                                isActive ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" :
                                "bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]",
                            )} />
                            {isLoaded ? slot.label : slotNum}
                          </button>
                          {isLoaded && (
                            <button
                              type="button"
                              onClick={(e) => handleClearSlot(idx, e)}
                              className="absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center bg-zinc-900 border border-zinc-700 text-zinc-500 hover:text-red-400 hover:border-red-500 opacity-0 group-hover/slot:opacity-100 transition-opacity"
                              title="clear slot"
                            >
                              <X className="h-2.5 w-2.5" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* MIDDLE: textarea */}
                  <div className="px-3 py-2.5">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          submit(e);
                        }
                      }}
                      placeholder="explore something new..."
                      rows={2}
                      className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 resize-none focus:outline-none custom-scrollbar"
                      style={{ maxHeight: '200px' }}
                    />
                  </div>

                  {/* BOTTOM: upload, drive, share + send */}
                  <div className="px-3 pb-2.5 flex items-center justify-between border-t border-zinc-900">
                    <div className="flex items-center gap-0.5 pt-2">
                      <button
                        type="button"
                        className="rounded-none p-1.5 text-zinc-600 transition-all duration-300 hover:text-[#00f0ff] hover:shadow-[0_0_14px_rgba(0,240,255,0.25)]"
                        title="upload file"
                      >
                        <Paperclip className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="rounded-none p-1.5 text-zinc-600 transition-all duration-300 hover:text-[#00f0ff] hover:shadow-[0_0_14px_rgba(0,240,255,0.25)]"
                        title="connect to drive"
                      >
                        <Database className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="rounded-none p-1.5 text-zinc-600 transition-all duration-300 hover:text-[#00f0ff] hover:shadow-[0_0_14px_rgba(0,240,255,0.25)]"
                        title="share"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isLoading || !(input || '').trim()}
                        className="h-8 w-8 shrink-0 rounded-none border border-[rgba(0,240,255,0.55)] bg-[#00f0ff] p-0 text-black transition-all duration-300 hover:bg-[#00f0ff]/85 hover:shadow-[0_0_22px_rgba(0,240,255,0.55),0_0_44px_rgba(0,240,255,0.25)] disabled:opacity-40 disabled:hover:shadow-none"
                      >
                        <Send className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDEBAR: MCP + SKILLS + MACROS — compact checklist */}
          {isRightSidebarOpen && (
            <aside className="flex w-52 shrink-0 flex-col border-l border-[rgba(0,240,255,0.12)] bg-black shadow-[-10px_0_40px_-12px_rgba(0,240,255,0.14)] transition-[border-color,box-shadow] duration-300">
              <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2.5 shadow-[0_8px_24px_-12px_rgba(0,240,255,0.08)]">
                <span className="text-xs font-bold lowercase text-white font-[family-name:var(--font-syne)]">active</span>
                <button
                  onClick={() => setIsRightSidebarOpen(false)}
                  className="text-zinc-500 transition-all duration-300 hover:text-[#00f0ff] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              <ScrollArea className="flex-1">
                <div className="px-2 py-2 flex flex-col gap-3">
                  {/* Active skills — fire-buttons (toggles live in settings) */}
                  <div>
                    <h3 className="text-[10px] font-[family-name:var(--font-syne)] font-bold lowercase tracking-widest text-zinc-600 px-1 mb-1">skills</h3>
                    <div className="flex flex-col gap-0">
                      {SKILLS.filter(s => activeSkills.includes(s.id)).map(skill => (
                        <button
                          key={skill.id}
                          onClick={() => setInput(skill.template)}
                          className="group flex w-full items-center gap-2 border border-transparent px-1 py-1.5 text-left transition-all duration-300 hover:border-[rgba(0,240,255,0.2)] hover:bg-[rgba(0,240,255,0.06)] hover:shadow-[0_0_12px_rgba(0,240,255,0.12)]"
                          title={`prefill: ${skill.template}…`}
                        >
                          <skill.icon className="h-3 w-3 text-[#00f0ff] shrink-0" />
                          <span className="text-xs lowercase text-zinc-300 group-hover:text-white truncate">{skill.name}</span>
                        </button>
                      ))}
                      {activeSkills.length === 0 && (
                        <p className="text-[10px] text-zinc-600 px-1 py-2 lowercase">none active · enable in settings</p>
                      )}
                    </div>
                  </div>

                  {/* Active MCPs — status only (no client-side fire action yet) */}
                  <div>
                    <h3 className="text-[10px] font-[family-name:var(--font-syne)] font-bold lowercase tracking-widest text-zinc-600 px-1 mb-1">mcp</h3>
                    <div className="flex flex-wrap gap-1 px-1">
                      {MCP_SERVERS.filter(m => activeMcps.includes(m.id)).map(mcp => (
                        <span
                          key={mcp.id}
                          className="inline-flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-500/5 px-1.5 py-0.5 text-[10px] lowercase text-emerald-300"
                        >
                          <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.6)]" />
                          {mcp.name}
                        </span>
                      ))}
                      {activeMcps.length === 0 && (
                        <p className="text-[10px] text-zinc-600 py-1 lowercase">none active</p>
                      )}
                    </div>
                  </div>

                  {/* Macros */}
                  <div>
                    <div className="flex items-center justify-between px-1 mb-1">
                      <h3 className="text-[10px] font-[family-name:var(--font-syne)] font-bold lowercase tracking-widest text-zinc-600">macros</h3>
                      <button
                        onClick={() => setIsMacroModalOpen(true)}
                        className="h-4 w-4 flex items-center justify-center text-zinc-600 hover:text-[#00f0ff] transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="space-y-0">
                      {macros.map(macro => {
                        const Icon = AVAILABLE_ICONS[macro.iconName] || Command;
                        return (
                          <div key={macro.id} className="relative group">
                            <button
                              onClick={() => fireMacro(macro)}
                              className="flex w-full items-center gap-2 border border-transparent px-1 py-1.5 text-left transition-all duration-300 hover:border-[rgba(0,240,255,0.2)] hover:bg-[rgba(0,240,255,0.06)] hover:shadow-[0_0_12px_rgba(0,240,255,0.12)]"
                            >
                              <Icon className="h-3 w-3 text-zinc-600 group-hover:text-[#00f0ff] shrink-0" />
                              <span className="text-xs lowercase text-zinc-400 group-hover:text-white truncate">{macro.name}</span>
                            </button>
                            <button
                              onClick={e => { e.stopPropagation(); setMacros(prev => prev.filter(m => m.id !== macro.id)); }}
                              className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="h-2.5 w-2.5" />
                            </button>
                          </div>
                        );
                      })}
                      {macros.length === 0 && (
                        <p className="text-[10px] text-zinc-600 px-1 py-2 text-center lowercase">no macros</p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </aside>
          )}
        </div>
      </div>

      {/* PERSONA MODAL */}
      <Dialog open={isPersonaModalOpen} onOpenChange={setIsPersonaModalOpen}>
        <DialogContent className="max-w-md rounded-none border-[rgba(0,240,255,0.18)] bg-zinc-950/80 shadow-[0_0_40px_rgba(0,240,255,0.12),0_0_80px_rgba(0,240,255,0.06)] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-syne)] lowercase text-white">new persona</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-2 max-h-[65vh] overflow-y-auto pr-1">
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">name</label>
              <Input
                value={newPersona.name}
                onChange={e => setNewPersona(p => ({ ...p, name: e.target.value }))}
                placeholder="persona name..."
                className="bg-zinc-900 border-zinc-800 rounded-none text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-[#00f0ff]"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">system prompt</label>
              <Textarea
                value={newPersona.prompt}
                onChange={e => setNewPersona(p => ({ ...p, prompt: e.target.value }))}
                placeholder="you are..."
                rows={10}
                className="bg-zinc-900 border-zinc-800 rounded-none text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-[#00f0ff] resize-none"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">icon</label>
              <IconPicker selected={newPersona.iconName} onSelect={name => setNewPersona(p => ({ ...p, iconName: name }))} />
            </div>
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">color</label>
              <div className="flex items-center gap-2 flex-wrap">
                {AVAILABLE_COLORS.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setNewPersona(p => ({ ...p, colorIdx: idx, customColor: c.hex }))}
                    style={{ backgroundColor: c.hex }}
                    className={cn(
                      "h-6 w-6 border-2 transition-all shrink-0",
                      newPersona.colorIdx === idx ? "border-white scale-110" : "border-transparent"
                    )}
                  />
                ))}
                <input
                  type="color"
                  value={newPersona.customColor}
                  onChange={e => setNewPersona(p => ({ ...p, customColor: e.target.value, colorIdx: -1 }))}
                  className="h-6 w-6 cursor-pointer border border-zinc-700 bg-zinc-900 p-0 rounded-none shrink-0"
                  title="custom color"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2 pb-1">
              <Button variant="outline" onClick={() => setIsPersonaModalOpen(false)} className="flex-1 rounded-none border-zinc-800 lowercase font-[family-name:var(--font-syne)]">cancel</Button>
              <Button onClick={handleSavePersona} className="flex-1 rounded-none bg-[#00f0ff] text-black hover:bg-[#00f0ff]/80 lowercase font-[family-name:var(--font-syne)]">save persona</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* MACRO MODAL */}
      <Dialog open={isMacroModalOpen} onOpenChange={setIsMacroModalOpen}>
        <DialogContent className="max-w-md rounded-none border-[rgba(0,240,255,0.18)] bg-zinc-950/80 shadow-[0_0_40px_rgba(0,240,255,0.12),0_0_80px_rgba(0,240,255,0.06)] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-syne)] lowercase text-white">new macro</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">name</label>
              <Input
                value={newMacro.name}
                onChange={e => setNewMacro(m => ({ ...m, name: e.target.value }))}
                placeholder="macro name..."
                className="bg-zinc-900 border-zinc-800 rounded-none text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-[#00f0ff]"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">prompt</label>
              <Textarea
                value={newMacro.prompt}
                onChange={e => setNewMacro(m => ({ ...m, prompt: e.target.value }))}
                placeholder="what this macro sends..."
                rows={3}
                className="bg-zinc-900 border-zinc-800 rounded-none text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-[#00f0ff] resize-none"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">icon</label>
              <IconPicker selected={newMacro.iconName} onSelect={name => setNewMacro(m => ({ ...m, iconName: name }))} />
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setIsMacroModalOpen(false)} className="flex-1 rounded-none border-zinc-800 lowercase font-[family-name:var(--font-syne)]">cancel</Button>
              <Button onClick={handleSaveMacro} className="flex-1 rounded-none bg-[#00f0ff] text-black hover:bg-[#00f0ff]/80 lowercase font-[family-name:var(--font-syne)]">save macro</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* MODIFIER MODAL — create a modifier for a specific slot */}
      <Dialog open={isModifierModalOpen} onOpenChange={(open) => {
        setIsModifierModalOpen(open);
        if (!open) { setActiveSlotIndex(null); setNewModifier({ label: '', instruction: '' }); }
      }}>
        <DialogContent className="max-w-md rounded-none border-[rgba(0,240,255,0.18)] bg-zinc-950/80 shadow-[0_0_40px_rgba(0,240,255,0.12),0_0_80px_rgba(0,240,255,0.06)] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-syne)] lowercase text-white">
              {activeSlotIndex != null ? `new modifier · slot ${activeSlotIndex + 1}` : 'new modifier'}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">label</label>
              <Input
                value={newModifier.label}
                onChange={e => setNewModifier(m => ({ ...m, label: e.target.value }))}
                placeholder="short pill text, e.g. 'aussie tone'..."
                className="bg-zinc-900 border-zinc-800 rounded-none text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-[#00f0ff]"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-500 font-[family-name:var(--font-syne)] lowercase mb-1.5 block">instruction</label>
              <Textarea
                value={newModifier.instruction}
                onChange={e => setNewModifier(m => ({ ...m, instruction: e.target.value }))}
                placeholder="what to inject into the system prompt when this is on..."
                rows={4}
                className="bg-zinc-900 border-zinc-800 rounded-none text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-[#00f0ff] resize-none"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setIsModifierModalOpen(false)} className="flex-1 rounded-none border-zinc-800 lowercase font-[family-name:var(--font-syne)]">cancel</Button>
              <Button onClick={handleSaveModifier} className="flex-1 rounded-none bg-[#00f0ff] text-black hover:bg-[#00f0ff]/80 lowercase font-[family-name:var(--font-syne)]">save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* SETTINGS MODAL */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="max-w-lg rounded-none border-[rgba(0,240,255,0.2)] bg-black shadow-[0_0_48px_rgba(0,240,255,0.14),0_0_96px_rgba(0,240,255,0.06)]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-syne)] lowercase text-white flex items-center gap-2">
              <Settings className="h-5 w-5 text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.7)]" />
              settings
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 mt-2 max-h-[70vh] overflow-y-auto">
            {/* MCP Servers */}
            <div className="space-y-3">
              <h3 className="text-xs font-[family-name:var(--font-syne)] font-bold lowercase tracking-wider text-zinc-500">mcp servers</h3>
              {MCP_SERVERS.map(mcp => (
                <div key={mcp.id} className="flex items-center justify-between py-2 border-b border-zinc-900">
                  <div className="flex items-center gap-3">
                    <div className={cn("h-2 w-2 rounded-full", activeMcps.includes(mcp.id) ? "bg-green-500" : "bg-red-500")} />
                    <div>
                      <p className="text-sm font-[family-name:var(--font-syne)] lowercase text-white">{mcp.name}</p>
                      <p className="text-xs text-zinc-500">{mcp.description}</p>
                    </div>
                  </div>
                  <Switch
                    checked={activeMcps.includes(mcp.id)}
                    onCheckedChange={() => setActiveMcps(prev => prev.includes(mcp.id) ? prev.filter(m => m !== mcp.id) : [...prev, mcp.id])}
                    className="data-[state=checked]:bg-green-500 rounded-none"
                  />
                </div>
              ))}
              <button className="w-full flex items-center justify-center gap-2 p-3 border border-dashed border-zinc-700 hover:border-[#00f0ff] hover:text-[#00f0ff] hover:bg-[#00f0ff]/5 text-zinc-500 transition-all">
                <Plus className="h-4 w-4" />
                <span className="text-xs font-[family-name:var(--font-syne)] font-bold lowercase">add mcp server</span>
              </button>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-xs font-[family-name:var(--font-syne)] font-bold lowercase tracking-wider text-zinc-500">skills</h3>
              {SKILLS.map(skill => (
                <div key={skill.id} className="flex items-center justify-between py-2 border-b border-zinc-900">
                  <div className="flex items-center gap-3">
                    <skill.icon className={cn("h-4 w-4", activeSkills.includes(skill.id) ? "text-green-500" : "text-zinc-500")} />
                    <div>
                      <p className="text-sm font-[family-name:var(--font-syne)] lowercase text-white">{skill.name}</p>
                      <p className="text-xs text-zinc-500">{skill.description}</p>
                    </div>
                  </div>
                  <Switch
                    checked={activeSkills.includes(skill.id)}
                    onCheckedChange={() => toggleSkill(skill.id)}
                    className="data-[state=checked]:bg-[#00f0ff] rounded-none"
                  />
                </div>
              ))}
            </div>

            {/* Default Model */}
            <div className="space-y-3">
              <h3 className="text-xs font-[family-name:var(--font-syne)] font-bold lowercase tracking-wider text-zinc-500">default model</h3>
              <Select value={selectedModelId} onValueChange={setSelectedModelId}>
                <SelectTrigger className="bg-zinc-900 border-zinc-800 rounded-none text-zinc-300 font-[family-name:var(--font-syne)] lowercase">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800 rounded-none">
                  {MODELS.map(m => (
                    <SelectItem key={m.id} value={m.id} className="font-[family-name:var(--font-syne)] lowercase text-zinc-300">
                      {m.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={() => setIsSettingsOpen(false)}
              className="rounded-none bg-[#00f0ff] text-black hover:bg-[#00f0ff]/80 lowercase font-[family-name:var(--font-syne)]"
            >
              done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
